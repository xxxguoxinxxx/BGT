import { ethers } from 'ethers'
import abi from './abi.json'
import { Web3 } from 'web3'
import axios from '@/services/request'

const BuyNFT = {
  address:'0xD01fd148cb0e735e3b41a4F0d4940277Bf428b11',
  'abi':abi
}

//stake and claim
const Stake = {
  address: '0xf5A36FF8A4c191bEa4054A459D1dbFe90F41EB1C',
  'abi': abi
}

const USDT = {
  address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  'abi': abi
}

const NFT = {
  address: '0xc934F270079741fB66F19e1CF16267078C5a8394',
  'abi': abi
}

const AppoveUsdt = async() => {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const c = new ethers.Contract(
    USDT.address,
    USDT.abi,
    signer
  )
  var res =  await c.approve(BuyNFT.address,9900000)
  return await res.wait()
}

const AppoveNFT = async() => {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const c = new ethers.Contract(
    NFT.address,
    NFT.abi,
    signer
  )
  var res =  await c.setApprovalForAll(Stake.address,true)
  return await res.wait()
}


const Buy = async() => {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const c = new ethers.Contract(
    BuyNFT.address,
    BuyNFT.abi,
    signer
  )
  var res =  await c.exchangeNft(1,1)
  return await res.wait()
}


const StakeNFT = async(inviteCode,ownerCode) => {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const c = new ethers.Contract(
    Stake.address,
    Stake.abi,
    signer
  )
  var res =  await c.stakeNFT(inviteCode,ownerCode,1)
  return await res.wait()
}

const claimToken = async() => {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const c = new ethers.Contract(
    Stake.address,
    Stake.abi,
    signer
  )
  var res =  await c.claimBGT()
  return await res.wait()
}




const claimToken11 = async() => {
  // await window.ethereum.enable()
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const c = new ethers.Contract(
    Financial.address,
    Financial.abi,
    signer
  )
  var res =  await c.release(2)
  return await res.wait()
}



const connectToWallet = async () =>{
  var res =  await window.ethereum.request({ method: 'eth_requestAccounts' });
  if (!window.ethereum) return alert('请连接钱包')
  if (ethereum.networkVersion != 137) return alert('请链接Polygon')
  // if (ethereum.networkVersion != 137 && ethereum.networkVersion != 137) return 1
  else return res
}
export {
  AppoveUsdt,
  AppoveNFT,
  Buy,
  StakeNFT,
  claimToken,
  connectToWallet,
  claimToken11,
}
