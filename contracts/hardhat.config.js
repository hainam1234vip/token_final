// API key: TDct-yQ6kBWsLbvpfloxiVfKTQTPFsK9
// url: https://eth-goerli.g.alchemy.com/v2/TDct-yQ6kBWsLbvpfloxiVfKTQTPFsK9
// private key: fbb467957f13a858903c69cc587b9b61a149c6c2fc225532de8a04ba9edc9659
// transaction address: 0xa9C5941b18a3c89898CfebCD23257A0794fD7CD7
// uniswap address: 0xFe227cD5c5e59b68c9650d94Fa2aD8921451678B

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0', // version of solidity
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/TDct-yQ6kBWsLbvpfloxiVfKTQTPFsK9',
      accounts: ['fbb467957f13a858903c69cc587b9b61a149c6c2fc225532de8a04ba9edc9659'],
    },
  },
};