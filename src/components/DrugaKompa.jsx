import React from 'react'
import withCount from './withCount'

const DrugaKompa = ({count, increment}) => {
  return (
      <>
      <div>{count}</div>
      <button onClick={increment}>druga</button>
    </>
  )
}

export default withCount(DrugaKompa)