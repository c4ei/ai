import { ethers } from "ethers";
import { mockDAIAddress } from "./contracts-config";
import images from "../assets/images";

// matic is native coin on the polygon chains
const MATIC = ethers.constants.AddressZero;

const tokens = {
  "AAH Mainnet": [
    {
      index: 0,
      symbol: "AAH",
      logo: images.aah,
      address: MATIC,
      decimals: 18,
    },
    {
      index: 1,
      symbol: "AUSD",
      logo: images.ausd,
      address: "0x3adBF8fa04c21517D8E50908305D0413D2A44300",
      decimals: 18,
    },
  ],
  "C4EI Mainnet": [
    {
      index: 0,
      symbol: "C4EI",
      logo: images.c4ei,
      address: MATIC,
      decimals: 18,
    },
    {
      index: 1,
      symbol: "USDT",
      logo: images.usdtc4ei,
      address: "0xf10e02ce41b28e52ad015eae3a83e040d4aee3a8",
      decimals: 18,
    },
  ],
  "Polygon Mainnet": [
    {
      index: 0,
      symbol: "MATIC",
      logo: images.matic,
      address: MATIC,
      decimals: 18,
    },
    {
      index: 1,
      symbol: "USDT",
      logo: images.usdt,
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      decimals: 6,
    },
    {
      index: 2,
      symbol: "DAI",
      logo: images.dai,
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      decimals: 18,
    },
    {
      index: 3,
      symbol: "USDC",
      logo: images.usdc,
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      decimals: 6,
    },
  ],
  "Mumbai Testnet": [
    {
      index: 0,
      symbol: "MATIC",
      logo: images.matic,
      address: MATIC,
      decimals: 18,
    },
    {
      index: 1,
      symbol: "USDT",
      logo: images.usdt,
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      decimals: 6,
    },
    {
      index: 2,
      symbol: "DAI",
      logo: images.dai,
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      decimals: 18,
    },
    {
      index: 3,
      symbol: "USDC",
      logo: images.usdc,
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      decimals: 6,
    },
  ],
  Ganache: [
    {
      index: 0,
      symbol: "MATIC",
      logo: images.matic,
      address: MATIC,
      decimals: 18,
    },
    {
      index: 1,
      symbol: "mDAI", // mock DAI
      logo: images.dai,
      address: mockDAIAddress,
      decimals: 18,
    },
  ],
};

function getTokenFromAddress(network, address) {
  const token = tokens[network].filter((t) => t.address === address);
  return token[0];
}

function parseTokenAmount(network, address, amount) {
  const token = tokens[network].filter((t) => t.address === address);
  return String(amount * 10 ** token[0].decimals);
}

function formatTokenAmount(network, address, amount) {
  const token = tokens[network].filter((t) => t.address === address);
  return Number(amount) / 10 ** token[0].decimals;
}

export {
  MATIC,
  tokens,
  getTokenFromAddress,
  parseTokenAmount,
  formatTokenAmount,
};
