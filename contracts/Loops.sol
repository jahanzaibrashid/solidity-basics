//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Loops {
    uint256[3] public arr;
    uint256 public count;

    function runWhileLoop() public {
        while (count < arr.length) {
            arr[count] = count;
            count++;
        }
    }

    function runForLoop() public {
      // for loop will reset array and set 0
        for (uint i = 0; i < arr.length; i++) {
            arr[i] = 0;
        }
    }
}
