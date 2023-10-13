import React, { useState } from 'react'

const UsestateCounter = () => {
   const [count, setCount] = useState(0)

   const handleIncrement = () => {
    setCount(count + 1)
   }

   const handleDecrement = () => {
    setCount(count - 1)
   }

   //The don't of hooks
//    - use Hooks at the top level of your function
//    - don't call hooks inside loops, conditions, or nested functions
//    - don't call hooks for regular javascript functions instead you can call for react functions

  return (
    <>
        <h2>UsestateCounter</h2>
        <h4>Count: {count}</h4>
        <button className='btn btn-primary' onClick={handleIncrement}>Increment</button>
        <button className='btn btn-danger ms-2' onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default UsestateCounter