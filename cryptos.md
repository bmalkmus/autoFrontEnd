# THINGS TO CHANGE

## Cryptos Token
- Change rpc node in useTokenBalance.ts
- .env will need nodes of chain that token will be on (NODE_ENV currently set to development)

- Change MasterChef contract
``contracts.tsx``
- Change Cake Vault in following file. 
``src/config/constants/pools.tsx``

- SVG is located @ ``public/images/token/CryptosToken``

- Change BSC scan toast messages

// getters
balance, allowance, rewards(Vault)


onChain calls
// approval, stake, unstake, harvest(?)

safeTransfer(tuple, id) <-- uniswap