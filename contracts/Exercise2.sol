//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

//complex data type created by user "struct" can include multipel data type in it
// we can declare struct inside of the contract and also outside of the contract
// benifit of declaring its outside is that multiple contracts can access it
struct Student {
    string name;
    uint256 roll;
}

contract Exercise2 {
    Student public s1;

    struct Car {
        string model;
        uint256 year;
        address owner;
    }
    Car public car;
    Car[] public cars;
    mapping(address => Car[]) public carsByOwner;

    constructor(uint256 _roll, string memory _name) {
        s1.roll = _roll;
        s1.name = _name;
    }

    function updateDefaultStudent(uint256 _roll, string memory _name) public {
        Student memory new_Student = Student({roll: _roll, name: _name});
        s1 = new_Student;
    }

    // function addStudent(uint256 _roll, string memory _name) public pure {
    //     Student memory s = Student({roll: _roll, name: _name});
    // }

    function examples() external {
        Car memory toyota = Car("Toyota", 1990, msg.sender);
        Car memory lambo = Car({
            model: "Lamborghini",
            year: 2020,
            owner: msg.sender
        });
        // now we will push these structs into the cars array
        cars.push(toyota);
        cars.push(lambo);

        //crate struct and push immidiately into the array 
        cars.push(Car("Mehran",2000,msg.sender));
    }

    function check(int256 a) public pure returns (string memory) {
        string memory value;

        if (a > 0) {
            value = "greater then zero";
        } else if (a < 0) {
            value = "less then zero";
        } else {
            value = "equal to zero";
        }
        return value;
    }
}
