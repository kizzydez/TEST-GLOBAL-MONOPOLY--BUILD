import { useState } from 'react';
import { ethers } from 'ethers';

export default function WalletConnect() {
  const [address, setAddress] = useState('');

  async function connectWallet() {
    if (window.ethereum) {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAddress(account);
    }
  }

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <p>{address && `Connected: ${address}`}</p>
    </div>
  );
}
import React from 'react';
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = 'YOUR_MONAD_CONTRACT_ADDRESS';
const CONTRACT_ABI = YOUR_ABI_OBJECT;

export default function WalletConnect() {
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      console.log('Wallet connected:', await signer.getAddress());
      console.log('Contract:', contract);
    }
  };

  return (
    <button onClick={connectWallet}>
      Connect Wallet
    </button>
  );
}
