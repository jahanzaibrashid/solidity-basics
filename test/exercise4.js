const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Exercise 4 Contract tests", function () {
  let owner, addr1, addr2, addrs, contract;
  it("beforeAll", async function () {
    if (network.name != "hardhat") {
      console.log("PLEASE USE --network hardhat");
      process.exit(0);
    }
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    // console.log("OWNER",owner.address)
    // console.log("ADDR1",addr1.address)

    // console.log("============ Start ============");
    // console.log("Deploying loops contract");
    Exercise4 = await ethers.getContractFactory("Exercise4");
    contract = await Exercise4.deploy();
    // console.log(contract.functions)
  });

  it("Set First student", async function () {
    await contract.setStudent(1,"Jahanzaib", 16);
    await contract.setStudent(2,"Dave", 18);
    const s1 = await contract.studentData(1);
    // console.log(s1)
    // expect(s1.name).to.equal("Dave");
    // expect(s1.roll).to.equal(2);
  });

  it("Student by roll number", async function () {
   const s1= await contract.getStudent(1);
   const s2= await contract.getStudent(2);
    console.log(s1)
    console.log(s2)
    // expect(s1.name).to.equal("Dave");
    // expect(s1.roll).to.equal(2);
  });
  
 
  //put above
});
