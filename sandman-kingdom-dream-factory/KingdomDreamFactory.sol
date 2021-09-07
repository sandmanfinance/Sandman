/*_________   _____    _______  ________      _____      _____    _______   
 /   _____/  /  _  \   \      \ \______ \    /     \    /  _  \   \      \  
 \_____  \  /  /_\  \  /   |   \ |    |  \  /  \ /  \  /  /_\  \  /   |   \ 
 /        \/    |    \/    |    \|    `   \/    Y    \/    |    \/    |    \
/_______  /\____|__  /\____|__  /_______  /\____|__  /\____|__  /\____|__  /
One Thing I've Learned. You Can Know Anything. It's All There. You Just Have To Find It.
*/

// SPDX-License-Identifier: MIT

import "./DreamStrategy.sol";

pragma solidity ^0.8.0;


contract KingdomDreamFactory is Ownable {
    event NewDreamContract(address indexed dreamAddress);

    constructor() {}

    // Info of each pool.
    struct PoolInfo {
        address strategyAddress;
    }

    PoolInfo[] public poolInfo;

    /*
     * @notice Deploy the pool
     * @param _stakedToken: staked token address
     * @param _rewardToken: reward token address
     * @param _rewardPerBlock: reward per block (in rewardToken)
     * @param _startBlock: start block
     * @param _endBlock: end block
     * @param _poolLimitPerUser: pool limit per user in stakedToken (if any, else 0)
     * @param _stakedTokenTransferFee: the transfer fee of stakedToken (if any, else 0)
     * @param _withdrawalInterval: the withdrawal interval for stakedToken (if any, else 0)
     * @param _admin: admin address with ownership
     * @return address of new dream contract
     */
    function deployPool(
        IERC20 _stakedToken,
        IERC20 _rewardToken,
        uint256 _rewardPerBlock,
        uint256 _startBlock,
        uint256 _bonusEndBlock,
        uint256 _poolLimitPerUser,
        uint16 _stakedTokenTransferFee,
        uint256 _withdrawalInterval,
        address _admin
    ) external onlyOwner {
        require(_stakedToken.totalSupply() >= 0);
        require(_rewardToken.totalSupply() >= 0);
        require(_stakedToken != _rewardToken, "Tokens must be be different");

        bytes memory bytecode = type(DreamStrategy).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(_stakedToken, _rewardToken, _startBlock));
        address dreamAddress;

        assembly {
            dreamAddress := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        DreamStrategy(dreamAddress).initialize(
            _stakedToken,
            _rewardToken,
            _rewardPerBlock,
            _startBlock,
            _bonusEndBlock,
            _poolLimitPerUser,
            _stakedTokenTransferFee,
            _withdrawalInterval,
            _admin
        );

        poolInfo.push(PoolInfo({strategyAddress: dreamAddress}));
        emit NewDreamContract(dreamAddress);
    }

    function poolLength() external view returns (uint256) {
        return poolInfo.length;
    }

}