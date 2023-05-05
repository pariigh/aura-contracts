// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import { Ownable } from "@openzeppelin/contracts-0.8/access/Ownable.sol";

/**
 * @title   BridgeDelegateSender
 * @author  AuraFinance
 * @dev     Sends tokens to L1 via a bridge
 */
abstract contract BridgeDelegateSender is Ownable {
    /* -------------------------------------------------------------------
       Storage 
    ------------------------------------------------------------------- */
    address public crv;

    address public l1Receiver;

    address public l2Coordinator;
    /* -------------------------------------------------------------------
       Events 
    ------------------------------------------------------------------- */
    /**
     * @dev Emitted when tokens are sent to a recipient.
     * @param to The address of the recipient.
     * @param amount The amount of tokens sent.
     */
    event Send(address to, uint256 amount);
    event L1ReceiverUpated(address l1Receiver);
    event L2CoordinatorUpated(address l2Coordinator);

    /* -------------------------------------------------------------------
       Setter Functions
    ------------------------------------------------------------------- */

    function setL1Receiver(address _l1Receiver) external onlyOwner {
        require(_l1Receiver != address(0), "!0");
        l1Receiver = _l1Receiver;
        emit L1ReceiverUpated(_l1Receiver);
    }

    function setL2Coordinator(address _l2Coordinator) external onlyOwner {
        require(_l2Coordinator != address(0), "!0");
        l2Coordinator = _l2Coordinator;
        emit L2CoordinatorUpated(_l2Coordinator);
    }

    function send(uint256 _amount) external virtual;
}
