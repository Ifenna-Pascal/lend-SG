import { textShortner } from "@/app/utilities/formater";
import Image from "next/image";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div className="ml-8 px-12 rounded-[4px] cursor-pointer  text-[14px] py-2 bg-green-900">
      {address && (
        <div className="text-white font-bold">{textShortner(address)}</div>
      )}
      <button className="text-white" onClick={() => disconnect()}>
        Disconnect
      </button>
    </div>
  );
}
