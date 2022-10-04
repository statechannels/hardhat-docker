require("@nomiclabs/hardhat-ethers");
const fs = require("fs");
const { bytecode } = require("./Create2Deployer.json");

task(
  "deploy",
  "Deploys contract and writes address to ./.contract",
  async (taskArgs, hre) => {
    // We get the contract to deploy
    const abi = []; // stubbed out since it is unecessary here
    const NA = await hre.ethers.getContractFactory(abi, bytecode);
    const na = await NA.deploy();

    // Await deployment
    await na.deployed();

    // Write file
    fs.writeFileSync("./.contract", na.address);
  },
);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.6",
  networks: {
    hardhat: {
      // Provide a large amount of funded accounts for large scale tests
      accounts: { count: 1000 },
      chainId: 1337,
    },
  },
};
