import { defineChain } from 'viem';

export const sonicBlaze = defineChain({
    id: 57054,
    name: 'Sonic Blaze Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Sonic',
      symbol: 'S',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.blaze.soniclabs.com'],
      },
    },
    blockExplorers: {
      default: { name: 'SonicScan', url: 'https://testnet.sonicscan.org' },
    },
    faucets: ['https://testnet.soniclabs.com/account'],
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 5882,
      },
    },
});
