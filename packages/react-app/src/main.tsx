import React from 'react'
import { ABIS } from '@project/eth-app'

export const Main = () => {
  return (
    <div>
      <h1>Defi client</h1>
      <h1>{ABIS.SToken.contractName}</h1>
    </div>
  )
}
