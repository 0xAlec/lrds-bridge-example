'use client';

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import { AppchainBridge } from '@coinbase/onchainkit/appchain';
import type { Appchain, BridgeableToken } from '@coinbase/onchainkit/appchain';
import { baseSepolia } from 'viem/chains';
import { LRDS_CHAIN } from './chain';

// Add an icon (optional)
const appchain: Appchain = {
  chain: LRDS_CHAIN,
  icon: (
    <img src="https://onchainkit.xyz/favicon/48x48.png?v4-19-24" alt="LRDS" />
  )
}

// Define bridgeable tokens (overrides default which is ETH)
const bridgeableTokens: BridgeableToken[] = [
  {
    address: '0x9A7bE36dF8221F5a3971693f5d71d2c471785478',
    remoteToken: '0x4200000000000000000000000000000000000006',
    name: 'Blocklords',
    symbol: 'LRDS',
    decimals: 18,
    chainId: LRDS_CHAIN.id,
    image: 'https://img.cryptorank.io/coins/blocklords1670492311588.png',
    isCustomGasToken: true, // This field is required for chains with custom gas tokens
  },
];

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <header className="pt-4 pr-4">
        <div className="flex justify-end">
          <div className="wallet-container">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon="wallet"
                  href="https://keys.coinbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-xl w-full p-4">
          <AppchainBridge chain={baseSepolia} appchain={appchain} bridgeableTokens={bridgeableTokens} />
        </div>
      </main>
    </div>
  );
}
