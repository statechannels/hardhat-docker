require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task(
  "my-deploy",
  "Deploys contract, get wallets, and outputs files",
  async (taskArgs, hre) => {
    // We get the contract to deploy
    const NA = await hre.ethers.getContractFactory("NitroAdjudicator");
    const na = await NA.deploy();

    // Await deployment
    await na.deployed();

    // Get address
    const contractAddress = na.address;

    // Write file
    fs.writeFileSync("./.contract", contractAddress);

    // Get generated signer wallets
    const accounts = await hre.ethers.getSigners();

    // Get the first wallet address
    const walletAddress = accounts[0].address;

    // Write file
    fs.writeFileSync("./.wallet", walletAddress);
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
