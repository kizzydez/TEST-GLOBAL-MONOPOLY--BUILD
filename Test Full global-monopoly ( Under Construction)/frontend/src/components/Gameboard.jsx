import React from 'react';

export default function GameBoard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Monopoly Board</h2>
      <p>[ Render Monopoly board here with 3D tiles, dice, turns, cards, animations ]</p>
    </div>
  );
}
import { ethers } from 'ethers';

async function stake() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(
    import.meta.env.VITE_CONTRACT_ADDRESS,
    JSON.parse(import.meta.env.VITE_CONTRACT_ABI),
    signer
  );
  await contract.stake({ value: ethers.parseEther("1") });
}
export default function GameBoard() {
  return (
    <div style={{ padding: '2rem', border: '2px solid #fff', width: '600px', height: '600px', margin: '2rem auto' }}>
      <h2>Monopoly Board (Dark Mode)</h2>
      <p>[Here: Draw your 3D Board, Tiles, Dice, Players]</p>
    </div>
  );
}
import React, { useState } from 'react';
import { initialBoard, initialPlayers } from '../game/GameState';
import Dice from './Dice';

export default function GameBoard() {
  const [players, setPlayers] = useState(initialPlayers);
  const [turn, setTurn] = useState(0);
  const [dice, setDice] = useState(0);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const roll = Math.ceil(Math.random() * 6);
      setDice(roll);
      movePlayer(roll);
      setRolling(false);
    }, 1000);
  };
  <button onClick={handleBuyProperty}>
  Buy Property
</button>

  const movePlayer = (roll) => {
    setPlayers((prev) =>
      prev.map((p, i) => {
        if (i === turn) {
          const newPos = (p.position + roll) % initialBoard.length;
          return { ...p, position: newPos };
        }
        return p;
      })
    );
    setTurn((prev) => (prev + 1) % players.length);
  };

  return (
    <div style={{ textAlign: 'center', color: '#fff' }}>
      <h2>Monopoly Board</h2>
      {players.map((p) => (
        <p key={p.id}>
          {p.name} at {initialBoard[p.position].name} | Balance: ${p.balance}
        </p>
      ))}
      <button onClick={rollDice} disabled={rolling}>
        Roll Dice
      </button>
      <Dice roll={dice} rolling={rolling} />
    </div>
  );
}
import { properties } from '../game/Properties';

const [boardProperties, setBoardProperties] = useState(properties);

const handleBuyProperty = () => {
  const player = players[turn];
  const pos = player.position;
  const prop = boardProperties.find(p => p.id === pos);

  if (!prop || prop.owner) {
    alert('This property is not for sale!');
    return;
  }
  const movePlayer = (roll) => {
  setPlayers((prev) =>
    prev.map((p, i) => {
      if (i === turn) {
        const newPos = (p.position + roll) % initialBoard.length;

        // Rent logic:
        const landedProperty = boardProperties.find(pr => pr.id === newPos);
        if (landedProperty && landedProperty.owner && landedProperty.owner !== p.id) {
          const rentAmount = landedProperty.rent;
          const updatedPlayers = [...prev];
          updatedPlayers[i].balance -= rentAmount;

          updatedPlayers[landedProperty.owner - 1].balance += rentAmount;

          setPlayers(updatedPlayers);
          alert(`Paid ${rentAmount} rent to Player ${landedProperty.owner}`);
        }

        return { ...p, position: newPos };
      }
      return p;
    })
  );
  setTurn((prev) => (prev + 1) % players.length);
};


  if (player.balance >= prop.price) {
    const updatedPlayers = players.map((p, i) =>
      i === turn ? { ...p, balance: p.balance - prop.price } : p
    );
    const updatedProperties = boardProperties.map(p =>
      p.id === pos ? { ...p, owner: player.id } : p
    );

    setPlayers(updatedPlayers);
    setBoardProperties(updatedProperties);
  } else {
    alert('Not enough balance!');
  }
};
