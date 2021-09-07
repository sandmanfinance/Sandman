/*
   _____   ________ ____________________  ___ __________________ ___  _________
  /     \  \_____  \\______   \______   \/   |   \_   _____/    |   \/   _____/
 /  \ /  \  /   |   \|       _/|     ___/    ~    \    __)_|    |   /\_____  \ 
/    Y    \/    |    \    |   \|    |   \    Y    /        \    |  / /        \
\____|__  /\_______  /____|_  /|____|    \___|_  /_______  /______/ /_______  /
        \/         \/       \/                 \/        \/                 \/
"Things Need Not Have Happened To Be True. Tales And Dreams Are The Shadow-Truths 
    That Will Endure When Mere Facts Are Dust And Ashes, And Forgot"
*/
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/* MorpheusToken Presale
 After Presale you'll be able to swap this token for Sandman. Ratio 1:1
*/
contract MorpheusToken is ERC20('MorpheusToken', 'MORPHEUS'), ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;

    address  constant presaleAddress = 0x467d9A3bF93Facba273E1532DD73b519687aefF6;
    
    IERC20 public USDC = IERC20(0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174);
    
    IERC20 morpheusToken = IERC20(address(this));

    uint256 public salePrice = 5;

    uint256 public constant morpheusMaximumSupply = 30000 * (10 ** 18); //30k

    uint256 public morpheusRemaining = morpheusMaximumSupply;
    
    uint256 public maxHardCap = 150000 * (10 ** 6); // 150k usdc

    uint256 public constant maxMorpheusPurchase = 600 * (10 ** 18); // 600 morpheus

    uint256 public startBlock;
    
    uint256 public endBlock;

    uint256 public constant presaleDuration = 179800; // 5 days aprox

    mapping(address => uint256) public userMorpheusTotally;

    event StartBlockChanged(uint256 newStartBlock, uint256 newEndBlock);
    event morpheusPurchased(address sender, uint256 usdcSpent, uint256 morpheusReceived);

    constructor(uint256 _startBlock) {
        startBlock  = _startBlock;
        endBlock    = _startBlock + presaleDuration;
        _mint(address(this), morpheusMaximumSupply);
    }

    function buyMorpheus(uint256 _usdcSpent) external nonReentrant {
        require(block.number >= startBlock, "presale hasn't started yet, good things come to those that wait");
        require(block.number < endBlock, "presale has ended, come back next time!");
        require(morpheusRemaining > 0, "No more Morpheus remains!");
        require(morpheusToken.balanceOf(address(this)) > 0, "No more Morpheus left!");
        require(_usdcSpent > 0, "not enough usdc provided");
        require(_usdcSpent <= maxHardCap, "Morpheus Presale hardcap reached");
        require(userMorpheusTotally[msg.sender] < maxMorpheusPurchase, "user has already purchased too much morpheus");

        uint256 morpheusPurchaseAmount = (_usdcSpent * 1000000000000) / salePrice;

        // if we dont have enough left, give them the rest.
        if (morpheusRemaining < morpheusPurchaseAmount)
            morpheusPurchaseAmount = morpheusRemaining;

        require(morpheusPurchaseAmount > 0, "user cannot purchase 0 morpheus");

        // shouldn't be possible to fail these asserts.
        assert(morpheusPurchaseAmount <= morpheusRemaining);
        assert(morpheusPurchaseAmount <= morpheusToken.balanceOf(address(this)));
        
        //send morpheus to user
        morpheusToken.safeTransfer(msg.sender, morpheusPurchaseAmount);
        // send usdc to presale address
    	USDC.safeTransferFrom(msg.sender, address(presaleAddress), _usdcSpent);

        morpheusRemaining = morpheusRemaining - morpheusPurchaseAmount;
        userMorpheusTotally[msg.sender] = userMorpheusTotally[msg.sender] + morpheusPurchaseAmount;

        emit morpheusPurchased(msg.sender, _usdcSpent, morpheusPurchaseAmount);

    }

    function setStartBlock(uint256 _newStartBlock) external onlyOwner {
        require(block.number < startBlock, "cannot change start block if sale has already started");
        require(block.number < _newStartBlock, "cannot set start block in the past");
        startBlock = _newStartBlock;
        endBlock   = _newStartBlock + presaleDuration;

        emit StartBlockChanged(_newStartBlock, endBlock);
    }

}