//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

/**
      _roll      _name          _class
      0          Jahanzaib      8
      1          Ali            10
      2          Hamza          11
 */

 contract Exercise4 {
   struct Student {
     string name;
     uint class;
   }
// key canot be of types "mapping, dynamic array, enum, struct
// values can be of anay type
// mapping will always be stored in contract storage
   mapping(uint=>string) public roll_no;
   mapping (uint => Student) public studentData;


   function setter(uint _roll, string memory _name) public {
     roll_no[_roll]=_name;
   }

   function setStudent(uint _roll, string memory _name, uint _class)public {
      studentData[_roll] = Student(_name,_class);
   }

   function getStudentName (uint _roll) public view returns(string memory){
     return studentData[_roll].name;
   }
   function getStudentClass (uint _roll) public view returns(uint){
     return studentData[_roll].class;
   }

   function getStudent (uint _roll) public view returns(Student memory){
     return studentData[_roll];
   }

//    function getStudents() public view returns(string memory) {
//     string memory output="";
//     for (uint i = 0; i < studentData.length; i++) {
//         output = string(abi.encodedPack(output,"[", studentData[i].name, ",", studentData[i].class, "]"));
//     }
//     return output;
// }



  //  function userByRollNo(uint _roll) public returns(string) {

  //  }
 }