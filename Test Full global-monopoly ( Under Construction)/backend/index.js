import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Global Monopoly backend is running ✅');
});

// Add admin endpoints here later if needed

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const stakeAndPlay = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  const amount = ethers.utils.parseEther('1'); // Example: stake 1 MONAD
  const tx = await contract.stake({ value: amount });
  await tx.wait();

  console.log('Staked & ready to play!');
};
