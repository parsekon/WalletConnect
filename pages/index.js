import { Web3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import ButtonConnect from "../components/ButtonConnect";
import { ethereumClient } from "./_app";

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <>
      <div className="flex h-screen justify-center bg-purple-100">
        <div className="flex flex-col self-center">
          {isConnected ? (
            <h1 className="text-xl"><span className="font-medium">Connect to address:</span> <span className="text-purple-600">{address}</span></h1>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">Connect your wallet:</h1>
              <ButtonConnect />
            </>
          )}
        </div>
      </div>
      <Web3Modal
        projectId={process.env.PROJECT_ID_WALLET}
        ethereumClient={ethereumClient}
      />
    </>
  );
}
