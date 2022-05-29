const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Loops contract", function () {
  let owner, addr1, addr2, addrs, contract;
  it("beforeAll", async function () {
    if (network.name != "hardhat") {
      console.log("PLEASE USE --network hardhat");
      process.exit(0);
    }
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    // console.log("OWNER",owner.address)
    // console.log("ADDR1",addr1.address)

    console.log("============ Start ============");
    console.log("Deploying loops contract");
    LOOPS = await ethers.getContractFactory("Loops");
    contract = await LOOPS.deploy();
  });

  it("test while loop", async function () {
    const length = 3;
    for (let i = 0; i < length; i++) {
      const element = await contract.arr([i]);
      console.log(`default array element => `, element);
    }
    console.log("====== Running while loop ======");
    await contract.runWhileLoop();

    for (let i = 0; i < length; i++) {
      const element = await contract.arr([i]);
      console.log(`array element after while loop => `, element);
    }
  });

  it("test for loop", async function () { 
    const length = 3
    for (let i = 0; i <length; i++) {
      const element = await contract.arr([i]);
      console.log(`old element => `, element);
    }
    console.log("====== Running for loop to re-set arr with 0======");
    await contract.runForLoop();

    for (let i = 0; i <length; i++) {
      const element = await contract.arr([i]);
      console.log(`array element after for loop => `, element);
    }
  });

  //put above
});
