// apiKey: 'c757fd8cf1954e83b080504791f91203', infura
// apiKey: 'TDct-yQ6kBWsLbvpfloxiVfKTQTPFsK9', alchemy

import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { infuraProvider, alchemyProvider } from 'wagmi/providers/alchemy'

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({
      apiKey: 'TDct-yQ6kBWsLbvpfloxiVfKTQTPFsK9',
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'Uniswap',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})


const MyApp = ({ Component, pageProps }) => (
  <>
    <header>
      <title>IU Exchange</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </header>

    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
    
  </>
);

export default MyApp;