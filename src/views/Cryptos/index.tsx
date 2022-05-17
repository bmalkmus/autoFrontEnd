import React from 'react'
import styled from 'styled-components'
import FlexLayout from '../../components/Layout/Flex'
import CakeVaultCard from './components/CakeVaultCard'
import {vaultPool} from './vaultPool'

const cakeVault = vaultPool

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
