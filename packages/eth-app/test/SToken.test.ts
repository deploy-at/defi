// const { BN, ether, balance } = require('@openzeppelin/test-helpers')

const SToken = artifacts.require('SToken')

contract('SToken', ([deployer, user]) => {

  it('should pass the test', async () => {
    const sToken = await SToken.new({ from: deployer })
    const balance = await sToken.balanceOf(user)
    expect(balance.toNumber()).to.equal(0)
  })
})
