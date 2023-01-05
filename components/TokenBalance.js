import React, { useEffect, useState } from 'react'
import {
  getTokenAddress,
  getTokenBalance,
  
} from '../utils/queries'

import { ethers } from 'ethers'
import { Toaster } from 'react-hot-toast'

import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline'

const TokenBalance = ({ name, walletAddress }) => {
  const [balance, setBalance] = useState('-')
  const [tokenAddress, setTokenAddress] = useState()
  const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon })
  const [txPending] = useState(false)

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance()
      fetchTokenAddress()
    } else setBalance('-')
  }, [name, walletAddress])

  const  fetchTokenBalance = async () => {
    const balance = await getTokenBalance(name, walletAddress)
    const fBalance = ethers.utils.formatUnits(balance.toString(), 18)
    setBalance(fBalance.toString())
  }

  const  fetchTokenAddress = async () => {
    const address = await getTokenAddress(name)
    setTokenAddress(address)
  }

  return (
    <div className='flex mx-2'>
      <div className='flex items-center eth-card p-2 px-3 rounded-l-lg'>
        <p className='text-sm'>{name}</p>
        <p className='bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100'>
          {balance}
        </p>
      </div>

      <div className='flex items-center p-2 px-2 bg-[#2ca723] rounded-r-lg'>
        <copyIcon.icon
          className='h-6 cursor-pointer'
          onClick={() => {
            navigator.clipboard.writeText(tokenAddress)
            setCopyIcon({ icon: ClipboardCheckIcon })
          }}
        />
      </div>

      <Toaster />
    </div>
  )
}

export default TokenBalance
