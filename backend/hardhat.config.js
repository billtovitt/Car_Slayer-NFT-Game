require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { MORALIS_RINKEBY_URL, MORALIS_FUJI_URL, PRIVATE_KEY, API_KEY } = process.env;

module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      url: MORALIS_RINKEBY_URL,
      accounts: [PRIVATE_KEY],
    },
    fuji: {
      url: MORALIS_FUJI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: API_KEY,
  },
};
