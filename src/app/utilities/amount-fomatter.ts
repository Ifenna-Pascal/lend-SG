import BigNumber from "bignumber.js";
import commaNumber from "comma-number";

// const format = commaNumber.bindWith(',', '.');

export const getBigNumber = (value: BigNumber) => {
  if (!value) {
    return new BigNumber(0);
  }
  if (BigNumber.isBigNumber(value)) {
    return value;
  }
  return new BigNumber(value);
};

export const compactNumberFormat = (value: number, isCompact?: boolean) => {
  return new Intl.NumberFormat("en-NG", {
    style: "decimal",
    notation: isCompact ? "compact" : "standard",
    compactDisplay: "short",
  }).format(value);
};

// export const shortenNumberFormatter = (labelValue: any) => {
//   // Nine Zeroes for Quintillion
//   return Math.abs(Number(labelValue)) >= 1.0e18
//     ? `${format(
//         new BigNumber(`${Math.abs(Number(labelValue)) / 1.0e18}`).dp(2, 1)
//       )}Q`
//     : // Nine Zeroes for Quadrillion
//     Math.abs(Number(labelValue)) >= 1.0e15
//     ? `${format(
//         new BigNumber(`${Math.abs(Number(labelValue)) / 1.0e15}`).dp(2, 1)
//       )}q`
//     : // Nine Zeroes for Trillions
//     Math.abs(Number(labelValue)) >= 1.0e12
//     ? `${format(
//         new BigNumber(`${Math.abs(Number(labelValue)) / 1.0e12}`).dp(2, 1)
//       )}T`
//     : // Nine Zeroes for Billions
//     Math.abs(Number(labelValue)) >= 1.0e9
//     ? `${format(
//         new BigNumber(`${Math.abs(Number(labelValue)) / 1.0e9}`).dp(2, 1)
//       )}B`
//     : // Six Zeroes for Millions
//     Math.abs(Number(labelValue)) >= 1.0e6
//     ? `${format(
//         new BigNumber(`${Math.abs(Number(labelValue)) / 1.0e6}`).dp(2, 1)
//       )}M`
//     : // Three Zeroes for Thousands
//     Math.abs(Number(labelValue)) >= 1.0e3
//     ? `${format(
//         new BigNumber(`${Math.abs(Number(labelValue)) / 1.0e3}`).dp(2, 1)
//       )}K`
//     : `${format(new BigNumber(`${Math.abs(Number(labelValue))}`).dp(2, 1))}`;
// };
