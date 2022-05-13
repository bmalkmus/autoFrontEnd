import {
  MenuItemsType,
  // DropdownMenuItemType,
  // SwapIcon,
  // SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  // TrophyIcon,
  // TrophyFillIcon,
  // NftIcon,
  // NftFillIcon,
  // MoreIcon,
  // menuStatus,
} from 'uikit'
import { ContextApi } from 'contexts/Localization/types'
// import { nftsBaseUrl } from 'views/Nft/market/constants'
// import { perpLangMap } from 'utils/getPerpetualLanguageCode'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    // label: t('Earn'),
    // href: '/farms',
    // icon: EarnIcon,
    // fillIcon: EarnFillIcon,
    // items: [
    //   {
    //     label: t('Farms'),
    //     href: '/farms',
    //   },
    //   {
    //     label: t('Pools'),
    //     href: '/pools',
    //   },
    // ],
  },
]

export default config
