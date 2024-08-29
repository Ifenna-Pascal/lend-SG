import { type Chain } from "viem";

export const testchain = {
  id: 725019,
  name: "Biturbo Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Biturbo",
    symbol: "TBO",
  },
  rpcUrls: {
    public: { http: ["https://test-rpc.biturbo.io"] },
    default: { http: ["https://test-rpc.biturbo.io"] },
  },
  blockExplorers: {
    default: {
      name: "Biturbo Testnet explorer",
      url: "https://testnet.biturboscan.io",
    },
  },
  testnet: true,
} as const satisfies Chain;
