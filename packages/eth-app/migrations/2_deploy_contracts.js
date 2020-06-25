// ganache-cli --fork https://rinkeby.infura.io/v3/d2b6be223087401fb875522c75d84571 --unlock 0xA01caBAaAf53E2835F89d3CCe25A2242A4abAEF6 -i 777 -p 8777
const { ether } = require('@openzeppelin/test-helpers')
const SToken = artifacts.require('SToken')

module.exports = async function(deployer, _network, accounts) {
  if(deployer.network_id === 777) return // test blockchain

  await deployer.deploy(SToken, { from: myWallet })
  const token = await SToken.deployed()
  console.log('tokenAddress', token.address)
}
