import React from 'react';

export default function Dice({ roll, rolling }) {
  return (
    <div style={{ fontSize: '2rem', margin: '1rem' }}>
      🎲 {rolling ? 'Rolling...' : `Rolled: ${roll}`}
    </div>
  );
}
<div className={rolling ? 'dice-roll' : ''}>
  🎲 {rolling ? 'Rolling...' : `Rolled: ${roll}`}
</div>
