"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex flex-col items-center grow pt-12">
        {/* HEADER */}
        <header className="px-5 text-center">
          <h1 className="text-5xl font-bold mb-3">Tokenization Project</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A full-stack Web3 demo where users can mint, purchase, and transfer NFTs. Built with Hardhat, Next.js,
            Wagmi, Viem & TailwindCSS.
          </p>
        </header>

        {/* CONNECTED ADDRESS */}
        <div className="flex flex-col items-center mt-8">
          <p className="font-medium text-lg">Connected Wallet</p>
          <Address address={connectedAddress} />
        </div>

        {/* HERO SECTION */}
        <section className="flex flex-col items-center mt-12 px-5 w-full">
          <Image
            src="/hero.png"
            width={727}
            height={231}
            alt="Challenge banner"
            className="rounded-xl border-4 border-primary shadow-lg"
          />

          <div className="max-w-3xl mt-10 space-y-6 text-center text-lg">
            <p>
              This project demonstrates a full NFT tokenization workflow. Smart contracts are compiled & deployed using{" "}
              <a href="https://hardhat.org/getting-started/" target="_blank" rel="noreferrer" className="underline">
                Hardhat
              </a>
              , while the frontend uses a modern Web3 React stack powered by Wagmi & Viem.
            </p>

            <p>
              Users can mint unique NFTs, view ownership, and transfer tokens between wallets. This dapp interacts with
              the Smart Contract{" "}
              <a
                href="https://sepolia.etherscan.io/address/0xeB933FcF0af2EC4fA4E3Ef4E6A9F97a8759E0c1C"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                YourCollectible.sol
              </a>
              , deployed on a Sepolia test network at address 0xeB933FcF0af2EC4fA4E3Ef4E6A9F97a8759E0c1C.
            </p>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="grow bg-base-300 w-full mt-20 px-8 py-14">
          <div className="flex justify-center items-center gap-14 flex-col md:flex-row">
            {/* Debug Contracts */}
            <div className="bg-base-100 px-10 py-10 rounded-3xl max-w-xs flex flex-col items-center text-center shadow-md">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p className="mt-4">
                Inspect & interact with your smart contracts using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                panel.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
