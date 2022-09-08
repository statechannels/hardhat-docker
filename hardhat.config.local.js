require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

task(
  "deploy",
  "Deploys contract and writes address to ./.contract",
  async (taskArgs, hre) => {
    // We get the contract to deploy
    const NA = await hre.ethers.getContractFactory("NitroAdjudicator");
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
      chainId: 1337,
    },
  },
};
