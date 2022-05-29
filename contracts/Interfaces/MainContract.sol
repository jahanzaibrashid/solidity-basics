// //SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.6;

// //defined interface with functions that do not contain an implementation
// //declared as type external

// interface IDataContractInterface {
//   function getAge() external pure returns(uint);
//   function getHeight() external pure returns(uint);
//   function getName() external pure returns(string memory);
//   function getCar() external pure returns(string memory);
// }



// contract MainContract {
    
//     // state variable called DataContractAddress that represents the address of the data contract
    
//     address private constant DataContractAddress = "PASTEFIRSTCONTRACTADDRESSHEREPASTEFIRSTCONTRACTADDRESSHERE";
    
    
//     // to access the functions in the data contract
//     // use the interface declared above and wrap the data contract address in ()
//     // example interfaceName(address).functionName
   
    

//     function getAge() external pure returns(uint) {
//         return IDataContractInterface(DataContractAddress).getAge();
//   }
  
//     function getHeight() external pure returns(uint) {
//         return IDataContractInterface(DataContractAddress).getHeight();
//   }
  
//     function getName() external pure returns(string memory) {
//         return IDataContractInterface(DataContractAddress).getName();
//   } 
  
//     function getCar() external pure returns(string memory) {
//         return IDataContractInterface(DataContractAddress).getCar();
//   }
// }