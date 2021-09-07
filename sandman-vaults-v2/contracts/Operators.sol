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
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Operators is Ownable {
    mapping(address => bool) public operators;

    event OperatorUpdated(address indexed operator, bool indexed status);

    modifier onlyOperator() {
        require(operators[msg.sender], "Operator: caller is not the operator");
        _;
    }

    // Update the status of the operator
    function updateOperator(address _operator, bool _status) external onlyOwner {
        operators[_operator] = _status;
        emit OperatorUpdated(_operator, _status);
    }
}
