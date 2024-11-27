import React, { useState } from 'react'

const Counter = () => {
    //logic
   // let count = 0;
   const [count, setCount] = useState(0)

   const handleIncrease = () => {
    //count = +1;
    setCount(count +1);
   // console.log("count", count);
    }
    const handleDncrease = () => {
        setCount(count -1);
        }


//view
  return (
    <div style={{border:'1px solid red', padding: '8px'}}>
        <h1>{count}</h1>
        <button type='button' onClick={handleIncrease}>
            + 1
        </button>
        <button type='button' onClick={handleDncrease}>
            - 1
        </button>
        </div>
  )
}

export default Counter;