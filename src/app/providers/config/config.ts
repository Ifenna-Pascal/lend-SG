import { createConfig, createStorage } from "wagmi";
import { testchain } from "../chain/test-chain";
import { createClient, http } from "viem";
import { coinbaseWallet, metaMask, walletConnect } from "wagmi/connectors";

const projectId = "7460fb7b9478ccfb7a95dc123624d4b2";

export const config = createConfig({
  chains: [testchain],
  connectors: [metaMask(), coinbaseWallet(), walletConnect({ projectId })],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});
