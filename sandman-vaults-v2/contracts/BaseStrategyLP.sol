/*_________   _____    _______  ________      _____      _____    _______   
 /   _____/  /  _  \   \      \ \______ \    /     \    /  _  \   \      \  
 \_____  \  /  /_\  \  /   |   \ |    |  \  /  \ /  \  /  /_\  \  /   |   \ 
 /        \/    |    \/    |    \|    `   \/    Y    \/    |    \/    |    \
/_______  /\____|__  /\____|__  /_______  /\____|__  /\____|__  /\____|__  /
One Thing I've Learned. You Can Know Anything. It's All There. You Just Have To Find It.
*/

// SPDX-License-Identifier: MIT


// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./BaseStrategy.sol";

abstract contract BaseStrategyLP is BaseStrategy {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    function convertDustToEarned() external nonReentrant whenNotPaused {
        // Converts dust tokens into earned tokens, which will be reinvested on the next earn().

        // Converts token0 dust (if any) to earned tokens
        uint256 token0Amt = IERC20(token0Address).balanceOf(address(this));
        if (token0Amt > 0 && token0Address != earnedAddress) {
            // Swap all dust tokens to earned tokens
            _safeSwap(
                token0Amt,
                token0ToEarnedPath,
                address(this)
            );
        }

        // Converts token1 dust (if any) to earned tokens
        uint256 token1Amt = IERC20(token1Address).balanceOf(address(this));
        if (token1Amt > 0 && token1Address != earnedAddress) {
            // Swap all dust tokens to earned tokens
            _safeSwap(
                token1Amt,
                token1ToEarnedPath,
                address(this)
            );
        }
    }
}