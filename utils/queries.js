// contract address: 0xFe227cD5c5e59b68c9650d94Fa2aD8921451678B
import { BigNumber, ethers } from 'ethers'
import { contract, tokenContract } from './contract'

export async function swapEthToToken(tokenName, amount) {
  try {
    let tx = { value: toWei(amount) }

    const contractObj = await contract()
    const data = await contractObj.swapEthToToken(tokenName, tx)

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return console.log(e)
  }
}

export async function hasValidAllowance(owner, tokenName, amount) {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)

    const tokenContractObj = await tokenContract(address)
    const data = await tokenContractObj.allowance(
      owner,
      '0xFe227cD5c5e59b68c9650d94Fa2aD8921451678B',
    )

    const result = BigNumber.from(data.toString()).gte(
      BigNumber.from(toWei(amount)),
    )

    return result
  } catch (e) {
    return console.log(e)
  }
}

export async function swapTokenToEth(tokenName, amount) {
  try {
    const contractObj = await contract()
    const data = await contractObj.swapTokenToEth(tokenName, toWei(amount))

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return console.log(e)
  }
}

export async function swapTokenToToken(srcToken, destToken, amount) {
  try {
    const contractObj = await contract()
    const data = await contractObj.swapTokenToToken(
      srcToken,
      destToken,
      toWei(amount),
    )

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return console.log(e)
  }
}

export async function getTokenBalance(tokenName, address) {
  const contractObj = await contract()
  const balance = contractObj.getBalance(tokenName, address)
  return balance
}

export async function getTokenAddress(tokenName) {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)
    return address
  } catch (e) {
    return console.log(e)
  }
}

export async function increaseAllowance(tokenName, amount) {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)

    const tokenContractObj = await tokenContract(address)
    const data = await tokenContractObj.approve(
      '0xFe227cD5c5e59b68c9650d94Fa2aD8921451678B',
      toWei(amount),
    )

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return console.log(e)
  }
}

function toWei(amount) {
  const toWei = ethers.utils.parseUnits(amount.toString())
  return toWei.toString()
}






