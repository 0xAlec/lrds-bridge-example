import { defineChain } from 'viem';

// Define a custom chain using viem
// https://viem.sh/docs/chains/introduction#custom-chains
export const LRDS_CHAIN = defineChain({
  id: 845320008,
  name: 'Blocklords',
  nativeCurrency: {
    name: 'Blocklords',
    symbol: 'LRDS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://blocklords-sepolia-rpc.l3.base.org'],
    },
  },
});
