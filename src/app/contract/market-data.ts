import { fetchMarket } from "./axios";
import constants from "./tokens";
import BigNumber from "bignumber.js";

export const fetchAssets = async () => {
  const {
    data: { markets },
  } = await fetchMarket();
  const result = Object.values(constants.CONTRACT_TOKEN_ADDRESS).map(
    (item, index) => {
      let market = markets.find(
        (token: any) =>
          token.address ===
          constants.CONTRACT_SBEP_ADDRESS[item.id].address
            .toString()
            .toLowerCase(),
      );
      if (!market) market = {};
      console.log(market, "marketr");

      const asset = {
        key: index,
        id: item.id,
        img: item.asset,
        vimg: item.sasset,
        name: item.symbol,
        totalBorrowsUsd: market.totalBorrowsUsd,
        totalSupplyUsd: market.totalSupplyUsd,
        supplyAddress: item.supplyAddress,
        symbol: item.symbol,
        tokenAddress: item.address,
        vsymbol: market.symbol,
        stokenAddress: constants.CONTRACT_SBEP_ADDRESS[item.id].address,
        supplyApy: market.supplyApy * 100,
        borrowApy: market.borrowApy * 100,
        supplyCaps: new BigNumber(market.supplyCaps || 0),
        borrowCaps: new BigNumber(market.borrowCaps || 0),
        strkSupplyApy: new BigNumber(market.supplySavmlendApy || 0),
        strkBorrowApy: new BigNumber(market.borrowSavmlendApy || 0),
        collateralFactor: new BigNumber(market.collateralFactor || 0).div(1e18),
        tokenPrice: new BigNumber(market.tokenPrice || 0),
        liquidity: new BigNumber(market.liquidity || 0),
        walletBalance: new BigNumber(0),
        supplyBalance: new BigNumber(0),
        borrowBalance: new BigNumber(0),
        allowBalance: new BigNumber(0),
        collateral: false,
        percentOfLimit: "0",
        borrowPaused: true,
        deprecated: market.deprecated,
      };
      return asset;
    },
  );

  return result;
};
