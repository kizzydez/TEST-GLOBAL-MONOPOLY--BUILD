import React from 'react';

export default function Leaderboard() {
  // Replace with real data from backend or smart contract
  const topPlayers = [
    { name: 'Alice', staked: 100 },
    { name: 'Bob', staked: 50 },
    { name: 'Charlie', staked: 20 },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Amount Staked (MONAD)</th>
          </tr>
        </thead>
        <tbody>
          {topPlayers.map((player, i) => (
            <tr key={i}>
              <td>{player.name}</td>
              <td>{player.staked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}