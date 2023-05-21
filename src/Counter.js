import React, { useState } from 'react'
import './Counter.css'

function Counter() {
  const [num, setNum] = useState(0);

  const decrease = () => {setNum(num - 1)};
  const increase = ()=> {setNum(num + 1)};
  const reset = ()=> {setNum(0)}

  return (
    <div className='counter'>
      <button onClick={decrease}>-</button>
      <div onClick={reset}>{num}</div>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default Counter