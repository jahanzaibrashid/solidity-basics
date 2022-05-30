//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

/**
 Storage              vs              Memory
 Holdes state variable                Holds local variables
                                      defined inside function
 Persistent                           Not presistent
 Cost gas                             No gas cost
 Like HDD                             Like cumputer Ram
 */

 contract Exercise5 {
   address payable user = payable(0xA7722c27a0eAaa4690358eE3D31a4D38F20c38A1);
   function payEther () public payable {

   }

   function getBalance() public view returns(uint){
     return address(this).balance;
   }

function sendEtherFromContract () public{
   user.transfer(1 ether);
}

 }
