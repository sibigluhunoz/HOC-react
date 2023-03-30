import React from 'react'
import withCount from './withCount'

const PrvaKompa = ({count, increment}) => {
  
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>prva</button>
    </>
  )
}

export default withCount(PrvaKompa)