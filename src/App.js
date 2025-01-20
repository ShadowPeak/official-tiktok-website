import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero">
          <h1>OFFICIAL TIKTOK</h1>
          <p className="tagline">A Symbol of Love for TikTok</p>
          <div className="stats">
            <p>Total Supply: 170,000,000 Coins</p>
            <p>Network: Ethereum</p>
            <p>System: Proof of Stake (PoS)</p>
          </div>
          <div className="buttons">
            <a href="#about" className="btn">Learn More</a>
            <a href="https://etherscan.io/token/0x8536434C2a323ABA93D31D87044381f9DFAc67E9" target="_blank" rel="noopener noreferrer" className="btn">View on Etherscan</a>
            <a href="#buy" className="btn">Buy on Uniswap</a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="about">
          <h2>About OFFICIAL TIKTOK</h2>
          <p>
            OFFICIAL TIKTOK is a cryptocurrency created to symbolize the love and support of
            the 170 million U.S. TikTok users affected by the ban on January 19, 2025. Built
            on the Ethereum network, it uses a Proof of Stake (PoS) system to align with the
            latest blockchain technology.
          </p>
        </section>

        <section id="how-to-buy" className="how-to-buy">
          <h2>How to Buy</h2>
          <ol>
            <li>Install a wallet like MetaMask and add the Ethereum network.</li>
            <li>Visit Uniswap and connect your wallet.</li>
            <li>Search for the token using the contract address:</li>
            <p className="contract-address">0x8536434C2a323ABA93D31D87044381f9DFAc67E9</p>
            <li>Swap ETH for OFFICIAL TIKTOK.</li>
          </ol>
        </section>

        <section id="roadmap" className="roadmap">
          <h2>Roadmap</h2>
          <ul>
            <li><strong>Q1 2025:</strong> Launch of the token and website.</li>
            <li><strong>Q2 2025:</strong> Community building and partnerships.</li>
            <li><strong>Q3 2025:</strong> Listing on decentralized exchanges.</li>
            <li><strong>Q4 2025:</strong> Expansion and feature integration.</li>
          </ul>
        </section>

        <section id="community" className="community">
          <h2>Join Our Community</h2>
          <p>Follow us on social media and stay updated:</p>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Telegram</a></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 OFFICIAL TIKTOK. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
