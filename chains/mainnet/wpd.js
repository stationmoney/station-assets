module.exports = {
  chainID: 'wpd-mainnet-1',
  lcd: 'https://api.peaceism.io',
  gasAdjustment: 1.75,
  gasPrices: { pcsm: 0 },
  prefix: 'wpd',
  coinType: '118',
  baseAsset: 'pcsm',
  name: 'WPD Mainnet',
  icon: process.env.CF_PAGES_URL + '/img/chains/WPD.png',
  channels: {},
  explorer: {
    address: 'https://explorer.peaceism.io',
    tx: 'https://explorer.peaceism.io',
    validator: 'https://explorer.peaceism.io',
    block: 'https://explorer.peaceism.io',
  },
  tokens: [
    {
      token: 'pcsm',
      symbol: 'PCSM',
      name: 'PEACEISM ECOSYSTEM COINS',
      icon: process.env.CF_PAGES_URL + '/img/coins/PCSM.png',
      decimals: 8,
    },
  ],
}
