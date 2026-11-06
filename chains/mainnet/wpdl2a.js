module.exports = {
  chainID: 'wpd-l2a-mainnet-1',
  lcd: 'https://api-l2a.peaceism.io',
  gasAdjustment: 1.75,
  gasPrices: { leea: 0 },
  prefix: 'leea',
  coinType: '118',
  baseAsset: 'leea',
  name: 'wpd-l2a-mainnet-1',
  icon: process.env.CF_PAGES_URL + '/img/chains/LEEA.png',
  channels: {},
  explorer: {
    address: 'https://explorer.peaceism.io',
    tx: 'https://explorer.peaceism.io',
    validator: 'https://explorer.peaceism.io',
    block: 'https://explorer.peaceism.io',
  },
  tokens: [
    {
      token: 'leea',
      symbol: 'LEEA',
      name: 'LEEA',
      icon: process.env.CF_PAGES_URL + '/img/coins/LEEA.png',
      decimals: 8,
    },
  ],
}
