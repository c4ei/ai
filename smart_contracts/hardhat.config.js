require("dotenv").config();
require("hardhat-contract-sizer");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers");
require("hardhat-gas-reporter");
require("solidity-coverage");

const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const MAINNET_FORK_RPC_URL = process.env.MAINNET_FORK_ALCHEMY_URL;
const AAH_RPC_URL = process.env.AAH_RPC_URL;
const C4EI_RPC_URL = process.env.C4EI_RPC_URL;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    // hardhat: {
    //   forking: {
    //     url: MAINNET_FORK_RPC_URL,
    //     blockNumber: 15465300
    //   }
    // },
    localhost: {
      chainId: 31337,
    },
    ganache: {
      chainId: 1337,
      url: "http://127.0.0.1:7545",
      accounts: [process.env.PRIVATE_KEY],
    },
    aah: {
      url: AAH_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 21133,
    },
    c4ei: {
      url: C4EI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 21004,
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 80001,
    },
    polygon: {
      url: POLYGON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 137,
    }
  },
  paths: {
    artifacts: "./artifacts",
  },
  gasReporter: {
    enabled: true,
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
  mocha: {
    timeout: 60000,
  },
};