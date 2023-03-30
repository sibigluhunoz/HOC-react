import {useState} from 'react'

const withCount = Komponenta => () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }
  return(
    <Komponenta count={count} increment={increment} />
  )
}

export default withCount