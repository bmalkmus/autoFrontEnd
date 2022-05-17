import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import tokens from 'config/constants/tokens'
import { FAST_INTERVAL, SLOW_INTERVAL } from 'config/constants'
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber'
import { Zero } from '@ethersproject/constants'
import { StaticJsonRpcProvider } from '@ethersproject/providers'
import useSWR from 'swr'
import { BIG_ZERO } from 'utils/bigNumber'
import { simpleRpcProvider } from 'utils/providers'
import { useCake, useTokenContract } from './useContract'
import { useSWRContract } from './useSWRContract'

const useTokenBalance = (tokenAddress: string) => {
  const { account } = useWeb3React()

  const contract = useTokenContract(tokenAddress, false)
  // eslint-disable-next-line no-console
  const { data, status, ...rest } = useSWRContract(
    account
      ? {
          contract,
          methodName: 'balanceOf',
          params: [account],
        }
      : null,
    {
      refreshInterval: FAST_INTERVAL,
    },
  )
  return {
    ...rest,
    fetchStatus: status,
    balance: data ? new BigNumber(data.toString()) : BIG_ZERO,
  }
}

export const useTotalSupply = () => {
  const { reader: cakeContract } = useCake()
  const { data } = useSWRContract([cakeContract, 'totalSupply'], {
    refreshInterval: SLOW_INTERVAL,
  })

  return data ? new BigNumber(data.toString()) : null
}

export const useBurnedBalance = (tokenAddress: string) => {
  const contract = useTokenContract(tokenAddress, false)
  const { data } = useSWRContract([contract, 'balanceOf', ['0x000000000000000000000000000000000000dEaD']], {
    refreshInterval: SLOW_INTERVAL,
  })

  return data ? new BigNumber(data.toString()) : BIG_ZERO
}

export const useGetBnbBalance = () => {
  const { account, chainId } = useWeb3React()
  const { status, data, mutate } = useSWR([account, 'nativeBalance'], async () => {
    const provider = new StaticJsonRpcProvider('https://rinkeby.infura.io/v3/a52a2d3c60014e68aa5a8029b38d7910')
    const balance = chainId === 4 ? await provider.getBalance(account) : await simpleRpcProvider.getBalance(account)
    // const balance = await provider.getBalance(account)
    return balance
  })

  return { balance: data || Zero, fetchStatus: status, refresh: mutate }
}

export const useGetCakeBalance = () => {
  const { balance, fetchStatus } = useTokenBalance(tokens.cake.address)

  // TODO: Remove ethers conversion once useTokenBalance is converted to ethers.BigNumber
  return { balance: EthersBigNumber.from(balance.toString()), fetchStatus }
}

export default useTokenBalance
