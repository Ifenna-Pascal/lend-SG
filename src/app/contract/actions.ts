import { useAccount, useReadContract } from "wagmi";
import { HexString, TOKEN_ABI } from "./abi/token-abi";
import { config } from "../providers/config/config";

export const useTokenHooks = () => {
  //     const set
  //     const {address} = useAccount();
  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     const {data: tokenBalance} =  useReadContract({
  //         abi: TOKEN_ABI,
  //         address: _tokenAddress,
  //         functionName: 'balanceOf',
  //         args: [address],
  //         config: config
  // })
  // return {tokenBalance}
};
