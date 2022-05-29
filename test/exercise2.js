const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Exercise 2 Contract tests", function () {
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
    Exercise2 = await ethers.getContractFactory("Exercise2");
    contract = await Exercise2.deploy(1,"Jahanzaib");
    let s1 = await contract.s1()
    expect(s1.name).to.equal("Jahanzaib")

  });

  it("test if else", async function () {
    const val = await contract.check(1)
    expect(await contract.check(0)).to.equal("equal to zero");
    expect(await contract.check(2)).to.equal('greater then zero');
    expect(await contract.check(1)).to.equal('greater then zero');
    expect(await contract.check(-1)).to.equal('less then zero');
  });
  it("Updating defautl user in struct", async function () {
    await contract.updateDefaultStudent(2,"Dave");
    const s1 = await contract.s1();
    expect(s1.name).to.equal("Dave");
    expect(s1.roll).to.equal(2);
  });
  
  it("Struct mapped with an array of cars", async function () {
    await contract.examples();
    const [model,year,ownerOfCar,...rest] = await contract.cars(0);
    expect(model).to.equal("Toyota")
    expect(year).to.equal(1990)
    expect(ownerOfCar).to.equal(owner.address)
    // console.log(contract.functions)
    // console.log(await contract.cars(0))
  });


  //put above
});
