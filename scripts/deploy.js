
const hre = require("hardhat");
const fs = require("fs");

async function main() {

  const Contract = await hre.ethers.getContractFactory("Identity");
  const contract = await Contract.deploy("Jahanzaib",19);
  await contract.deployed();
  saveFrontendFiles(contract,"Identity",{})
}

function saveFrontendFiles(contract,contractName,obj) {
  let object ={}
  const contractsDir = __dirname + "/../frontend/contracts";
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
  let contractArtifact = artifacts.readArtifactSync(contractName);
  if(contractArtifact){
    obj['address'] = contract.address;
    object = {...obj,...contractArtifact}
  }else{
    console.log('error while reading from artifacts')
  }
 

  // fs.writeFileSync(contractsDir + "/contract-address.json", JSON.stringify(obj, undefined, 2));
  fs.writeFileSync(contractsDir + "/"+contractName+".json", JSON.stringify(object, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
