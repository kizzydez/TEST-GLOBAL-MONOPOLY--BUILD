import React from 'react';
import Navbar from './components/Navbar';
import GameBoard from './components/GameBoard';
import Leaderboard from './components/Leaderboard';
import AdminBoard from './components/AdminBoard';

export default function App() {
  return (
    <div>
      <Navbar />
      {/* Add routes or conditionals */}
      <GameBoard />
      <Leaderboard />
      <AdminBoard />
    </div>
  );
}
import React from 'react';
import Navbar from './components/Navbar';
import GameBoard from './components/GameBoard';
import Leaderboard from './components/Leaderboard';
import AdminBoard from './components/AdminBoard';
import LanguageSwitcher from './components/LanguageSwitcher';
import WalletConnect from './components/WalletConnect';

export default function App() {
  return (
    <div>
      <Navbar />
      <WalletConnect />
      <LanguageSwitcher />
      <GameBoard />
      <Leaderboard />
      <AdminBoard />
    </div>
  );
}
