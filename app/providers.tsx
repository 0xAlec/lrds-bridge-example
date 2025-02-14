'use client';

import { baseSepolia } from 'wagmi/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import type { ReactNode } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LRDS_CHAIN } from './chain';

// Add your appchain to the wagmi config
const wagmiConfig = createConfig({
  chains: [baseSepolia, LRDS_CHAIN],
  transports: {
    [baseSepolia.id]: http(),
    [LRDS_CHAIN.id]: http(),
  }
});

const queryClient = new QueryClient();

export function Providers(props: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={baseSepolia}
          config={{ appearance: { 
            mode: 'auto',
        }
      }}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </WagmiProvider>
    </OnchainKitProvider>
  );
}

