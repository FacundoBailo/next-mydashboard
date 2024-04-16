'use client'

import { useState } from "react"

export const CartCounter = () => {

  const [ counter, setCounter] = useState(0)

  const increment = () =>{
    setCounter( counter + 1)
  };

  const reset = () =>{
    setCounter( counter => counter = 0 )
  };

  const decrement = () => {
    setCounter( counter -1)
  };
  

  return (
    <>
        <span className="text-9xl">{ counter}</span>

        <div className="flex">
        <button 
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={ increment }
        >
            +1
        </button>

        <button 
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={ reset }
            >
            Reset
        </button>

        <button 
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={ decrement }
            >
            -1
        </button>
        </div>
    </>
  )
}