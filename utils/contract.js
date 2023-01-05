import { ethers } from 'ethers';
import UniswapABI from './Uniswap.json';
import CustomTokenABI from './CustomToken.json';

// Transaction contract address: 0xa9C5941b18a3c89898CfebCD23257A0794fD7CD7
import abi from './Transactions.json';
export const contractABI = abi.abi;
export const contractAddress = '0xa9C5941b18a3c89898CfebCD23257A0794fD7CD7';

// Uniswap contract address: 0xFe227cD5c5e59b68c9650d94Fa2aD8921451678B

export const tokenContract = async address => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window

  if (ethereum) {
    const signer = provider.getSigner()

    const contractReader = new ethers.Contract(address, CustomTokenABI.abi, signer)

    return contractReader
  }
}

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window

  if (ethereum) {
    const signer = provider.getSigner()

    const contractReader = new ethers.Contract(
      '0xFe227cD5c5e59b68c9650d94Fa2aD8921451678B',
      UniswapABI.abi,
      signer,
    )

    return contractReader
  }
}

