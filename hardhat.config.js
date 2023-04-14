require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { RPC_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
