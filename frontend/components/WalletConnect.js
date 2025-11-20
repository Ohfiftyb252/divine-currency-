import React, { useMemo } from "react";
import {
  WalletModalProvider,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

const WalletConnect = () => {
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="flex justify-center mb-6">
            <WalletMultiButton />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnect;