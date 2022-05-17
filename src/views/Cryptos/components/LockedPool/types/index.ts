import { Dispatch, SetStateAction } from 'react'
import { CryptosToken } from '@pancakeswap/sdk'
import { CryptosToken } from 'config/constants/types'
import BigNumber from 'bignumber.js'
import { VaultPosition, VaultPositionParams } from 'utils/cakePool'
import { DeserializedLockedVaultUser } from 'state/types'

type VoidFn = () => void

export type PrepConfirmArg = (arg: ValidatorArg) => ValiratorReturn

export interface GenericModalProps {
  onDismiss?: VoidFn
  stakingToken: CryptosToken
  currentBalance: BigNumber
  stakingTokenBalance: BigNumber
}

export interface ValidatorArg {
  duration: number
}

export interface ValiratorReturn {
  finalLockedAmount?: number
  finalDuration?: number
}

export interface ExtendDurationModal {
  stakingToken: CryptosToken
  currentLockedAmount: number
  onDismiss?: VoidFn
  modalTitle?: string
  currentDuration: number
  lockStartTime: string
}

export interface AddButtonProps {
  currentBalance: BigNumber
  stakingToken: CryptosToken
  currentLockedAmount: BigNumber
  lockEndTime: string
  lockStartTime: string
  stakingTokenBalance: BigNumber
}

export interface OverviewPropsType {
  usdValueStaked: number
  lockedAmount: number
  openCalculator: () => void
  duration: number
  isValidDuration: boolean
  newDuration?: number
  newLockedAmount?: number
  lockStartTime?: string
  lockEndTime?: string
  showLockWarning?: boolean
}

export interface AddAmountModalProps {
  onDismiss?: VoidFn
  stakingToken: CryptosToken
  currentBalance: BigNumber
  currentLockedAmount: BigNumber
  passedDuration: number
  remainingDuration: number
  lockEndTime?: string
  stakingTokenBalance: BigNumber
}

export interface ModalValidator {
  isValidAmount: boolean
  isValidDuration: boolean
  isOverMax: boolean
}

export interface LockedModalBodyPropsType {
  onDismiss?: VoidFn
  stakingToken: CryptosToken
  currentBalance?: BigNumber
  lockedAmount: BigNumber
  editAmountOnly?: React.ReactElement
  prepConfirmArg?: PrepConfirmArg
  validator?: (arg: ValidatorArg) => ModalValidator
  customOverview?: ({ isValidDuration: boolean, duration: number }) => React.ReactElement
}

export interface ExtendDurationButtonPropsType {
  stakingToken: CryptosToken
  currentLockedAmount: number
  lockEndTime: string
  lockStartTime: string
  children: React.ReactNode
  modalTitle?: string
}

export interface AfterLockedActionsPropsType {
  lockEndTime: string
  lockStartTime: string
  currentLockedAmount: number
  stakingToken: CryptosToken
  position: VaultPosition
  isInline?: boolean
}

export interface LockedActionsPropsType extends VaultPositionParams {
  lockStartTime: string
  stakingToken: CryptosToken
  stakingTokenBalance: BigNumber
  lockedAmount: BigNumber
}

export interface StaticAmountPropsType {
  stakingSymbol: string
  stakingAddress: string
  lockedAmount: number
  usdValueStaked: number
}

export interface LockDurationFieldPropsType {
  duration: number
  setDuration: Dispatch<SetStateAction<number>>
  isOverMax: boolean
}

export interface LockedStakingApyPropsType {
  stakingToken: CryptosToken
  stakingTokenBalance: BigNumber
  userData: DeserializedLockedVaultUser
}
