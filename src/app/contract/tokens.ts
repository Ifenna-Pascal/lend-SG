/* eslint-disable import/no-anonymous-default-export */
import wbbtc from "@/app/assets/tokens/wbtc.png";
import bto from "@/app/assets/tokens/bto.png";

const CONTRACT_TOKEN_ADDRESS = {
  wbbtc: {
    id: "wbbtc",
    symbol: "WBBTC",
    address: "0xe88942e18eceee177471f4f66e00c981bb752de8",
    supplyAddress: "0x8ad5dc65094cff1698aedea9603353975a135f44",
    asset: wbbtc,
    sasset: wbbtc,
    decimals: 18,
  },
  bto: {
    id: "bto",
    symbol: "BTO",
    address: "0xa467a8acd03018fb9214afd558f0ea06fb17a9a6",
    supplyAddress: "0xa467a8acd03018fb9214afd558f0ea06fb17a9a6",
    asset: bto,
    sasset: bto,
    decimals: 18,
  },
};

const CONTRACT_SBEP_ADDRESS: {
  [k: string]: {
    id: string;
    symbol: string;
    address: string;
    supplyAddress: string;
  };
} = {
  bto: {
    id: "bto",
    symbol: "bBTO",
    address: "0xa467a8acd03018fb9214afd558f0ea06fb17a9a6",
    supplyAddress: "0xa467a8acd03018fb9214afd558f0ea06fb17a9a6",
  },
  wbbtc: {
    id: "bbtc",
    symbol: "bBTC",
    supplyAddress: "0x8ad5dc65094cff1698aedea9603353975a135f44",
    address: "0x8ad5dc65094cff1698aedea9603353975a135f44",
  },
};

export default { CONTRACT_SBEP_ADDRESS, CONTRACT_TOKEN_ADDRESS };
