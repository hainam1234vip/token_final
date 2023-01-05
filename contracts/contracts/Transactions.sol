// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; // declaring solidity version

contract Transactions { // this is the main contract
    
    uint256 transactionCount;
    // Declaring and calling an event with 5 elements
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp);

    // Create an struct elements which contain 5 elements
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] transactions; // create new truct based on previous truct
    // function add to blockchain node
    function addToBlockchain(address payable receiver, uint amount, string memory message) public {
        transactionCount += 1;
        // push function will push variables to blockchain node
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));
        // emit an event which means store variables to blockchain node
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    // function return variables within the struct
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions; // return struct elements
    }


    // function return how many transactions have been made
    function getTransactionCount() public view returns (uint256) {
        return transactionCount; // return number of transaction
    }
}