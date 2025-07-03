import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Global Monopoly</h1>
      <div>
        <button>Play</button>
        <button>Connect Wallet</button>
        <button>Leaderboard</button>
        <button>Admin</button>
        <button>Language</button>
      </div>
    </nav>
  );
}
import React, { useState } from 'react';

export default function Navbar() {
  const [soundOn, setSoundOn] = useState(true);
  const [musicOn, setMusicOn] = useState(true);

  const toggleSound = () => setSoundOn(!soundOn);
  const toggleMusic = () => setMusicOn(!musicOn);

  return (
    <nav className="navbar">
      <h1>Global Monopoly</h1>
      <div>
        <button>Play</button>
        <button>Connect Wallet</button>
        <button>Leaderboard</button>
        <button>Admin</button>
        <button>Language</button>
        <button onClick={toggleSound}>{soundOn ? '🔊 Sound On' : '🔇 Sound Off'}</button>
        <button onClick={toggleMusic}>{musicOn ? '🎵 Music On' : '🔕 Music Off'}</button>
      </div>
    </nav>
  );
}