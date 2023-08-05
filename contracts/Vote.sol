// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Vote {
    uint8 public cerealVotes;
    uint8 public milkVotes;

    constructor() {
        cerealVotes = 0;
        milkVotes = 0;
    }

    // FUNCTIONS
    // add 1 vote for cereal
    function voteCereal() public {
        cerealVotes++;
    }

    // add 1 vote for milk
    function voteMilk() public {
        milkVotes++;
    }

    function getCerealVotes() public view returns (uint8) {
        return cerealVotes;
    }

    function getMilkVotes() public view returns (uint8) {
        return milkVotes;
    }
}
