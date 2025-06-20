
import './App.css'
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import {
  mainnet,
  arbitrum,
  polygon,
  optimism
} from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Swap from './pages/Swap'
import Tokenize from './pages/Tokenize'
import NFT from './pages/NFT'
import Airdrop from './pages/Airdrop'
import Docs from './pages/Docs'
import Whitepaper from './pages/Whitepaper'
import Roadmap from './pages/Roadmap'
import Staking from './pages/Staking'
import Contact from './pages/Contact'

const { chains, publicClient } = configureChains(
  [mainnet, arbitrum, polygon, optimism],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Vic Swap Protocol',
  projectId: 'vic-swap-app',
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Router>
          <header className="header">
            <div className="logo">Vic Swap Protocol</div>
            <nav className="nav">
              <Link to="/">Swap</Link>
              <Link to="/tokenize">Tokenize</Link>
              <Link to="/nft">NFT</Link>
              <Link to="/airdrop">Airdrop</Link>
              <Link to="/docs">Docs</Link>
              <Link to="/whitepaper">Whitepaper</Link>
              <Link to="/roadmap">Roadmap</Link>
              <Link to="/staking">Staking</Link>
              <Link to="/contact">Contact</Link>
              <ConnectButton />
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Swap />} />
              <Route path="/tokenize" element={<Tokenize />} />
              <Route path="/nft" element={<NFT />} />
              <Route path="/airdrop" element={<Airdrop />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/staking" element={<Staking />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
