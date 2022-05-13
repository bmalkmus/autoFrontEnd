import React from 'react'
import styled from 'styled-components'
import FlexLayout from '../../components/Layout/Flex'
import CakeVaultCard from './components/CakeVaultCard'

const cakeVault = {
  apr: 5365.414191755587,
  contractAddress: { 56: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652', 97: '' },
  earningToken: {
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    chainId: 56,
    decimals: 18,
    name: 'PancakeSwap Token',
    projectLink: 'https://pancakeswap.finance/',
    symbol: 'CAKE',
  },
  earningTokenPrice: 3.946900614093427,
  fees: {
    performanceFee: 200,
    performanceFeeAsDecimal: 2,
    withdrawalFee: 10,
    withdrawalFeePeriod: 259200,
  },
  harvest: true,
  isFinished: false,
  poolCategory: 'Core',
  profileRequirement: undefined,
  sortOrder: 1,
  sousId: 0,
  vaultKey: "cakeVault",
  stakingLimitEndBlock: NaN,
  stakingToken: {
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    chainId: 56,
    decimals: 18,
    name: 'PancakeSwap Token',
    projectLink: 'https://pancakeswap.finance/',
    symbol: 'CAKE',
    stakingTokenPrice: 3.946900614093427,
    startBlock: undefined,
    tokenPerBlock: '10',
    userDataLoaded: true,
    vaultKey: 'cakeVault',
  },
  pricePerFullShare: 143500,
  stakingLimit: 2,
  totalCakeInVault: 143500,
  totalLockedAmount: 143500,
  totalShares: 143500,
  totalStaked: 143500,
  userData: {
    allowance: 999999,

    balance: {
      cakeAsBigNumber: BigInt(0),
      cakeAsDisplayBalance: '0.000',
      cakeAsNumberBalance: 0,
    },
    cakeAtLastUserAction: BigInt(0),
    currentOverdueFee: BigInt(0),
    currentPerformanceFee: BigInt(0),
    isLoading: false,
    lastDepositedTime: '0',
    lastUserActionTime: '0',
    lockEndTime: '0',
    lockStartTime: '0',
    locked: false,
    lockedAmount: BigInt(0),
    pendingReward: BigInt(0),
    stakedBalance: BigInt(0),
    stakingTokenBalance: BigInt(0),
    userBoostedShare: BigInt(0),
    userShares: BigInt(0),
  },
}

const CardLayout = styled(FlexLayout)`
  justify-content: center;
`

const Cryptos: React.FC = () => {
  return (
    <CardLayout>
      <CakeVaultCard key={cakeVault.vaultKey} pool={cakeVault} showStakedOnly={false} />
    </CardLayout>
  )
}

export default Cryptos
