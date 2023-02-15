import { useState } from "react"

export const useCounter = ()=>{
let n = 6;
let i = 2;

const [ count , setCount ] = useState(n && 0)

const incrementHandler =()=>{
  setCount(prevState => prevState + n )
}

const decrementHandler =()=>{
  setCount(prevState => {
    if(prevState > 0 ){
    return   prevState - i 
    }
   return prevState
  
  })
}
   return {
    count ,
    incrementHandler,
    decrementHandler,
   }
}
