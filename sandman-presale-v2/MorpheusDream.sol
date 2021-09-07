/*
   _____   ________ ____________________  ___ __________________ ___  _________
  /     \  \_____  \\______   \______   \/   |   \_   _____/    |   \/   _____/
 /  \ /  \  /   |   \|       _/|     ___/    ~    \    __)_|    |   /\_____  \ 
/    Y    \/    |    \    |   \|    |   \    Y    /        \    |  / /        \
\____|__  /\_______  /____|_  /|____|    \___|_  /_______  /______/ /_______  /
        \/         \/       \/                 \/        \/                 \/
One Thing I've Learned. You Can Know Anything. It's All There. You Just Have To Find It.
*/
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


import "./MorpheusToken.sol";

contract MorpheusDream is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    // Burn address
    address public constant BURN_ADDRESS = 0x000000000000000000000000000000000000dEaD;

    MorpheusToken public morpheusToken;

    IERC20 public sandManToken;

    address  sandmanAddress;

    bool  hasBurnedUnsoldPresale;

    bool  redeemState;

    uint256 public startBlock;

    event MorpheusToSandman(address sender, uint256 amount);
    event burnUnclaimedSandMan(uint256 amount);
    event startBlockChanged(uint256 newStartBlock);

    constructor(uint256 _startBlock, address _morpheusAddress, address _sandmanAddress) {
        require(_morpheusAddress != _sandmanAddress, "morpheus cannot be equal to sandman");
        startBlock = _startBlock;
        morpheusToken = MorpheusToken(_morpheusAddress);
        sandManToken = IERC20(_sandmanAddress);
    }

    function swapMorpheusForSandMan() external nonReentrant {
        require(block.number >= startBlock, "morpheus still awake.");

        uint256 swapAmount = morpheusToken.balanceOf(msg.sender);
        require(sandManToken.balanceOf(address(this)) >= swapAmount, "Not Enough tokens in contract for swap");
        require(morpheusToken.transferFrom(msg.sender, BURN_ADDRESS, swapAmount), "failed sending morpheus" );
        sandManToken.safeTransfer(msg.sender, swapAmount);

        emit MorpheusToSandman(msg.sender, swapAmount);
    }

    function sendUnclaimedSandManToDeadAddress() external onlyOwner {
        require(block.number > morpheusToken.endBlock(), "can only send excess morpheus to dead address after presale has ended");
        require(!hasBurnedUnsoldPresale, "can only burn unsold presale once!");

        require(morpheusToken.morpheusRemaining() <= sandManToken.balanceOf(address(this)),
            "burning too much sandman, check again please");

        if (morpheusToken.morpheusRemaining() > 0)
            sandManToken.safeTransfer(BURN_ADDRESS, morpheusToken.morpheusRemaining());
        hasBurnedUnsoldPresale = true;

        emit burnUnclaimedSandMan(morpheusToken.morpheusRemaining());
    }

    function setStartBlock(uint256 _newStartBlock) external onlyOwner {
        require(block.number < startBlock, "cannot change start block if presale has already commenced");
        require(block.number < _newStartBlock, "cannot set start block in the past");
        startBlock = _newStartBlock;

        emit startBlockChanged(_newStartBlock);
    }

}