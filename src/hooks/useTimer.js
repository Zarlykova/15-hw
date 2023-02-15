import { useEffect } from "react"
import { useState } from "react"


export const useTimer =()=>{
    const [ seconds , setSeconds ] = useState(0)
    const [ minutes , setMinutes ] = useState(0)
let timer ;

useEffect(()=>{
timer = setInterval(()=>{
setSeconds(seconds + 1);
if(seconds === 59){
    setMinutes(minutes+1)
    setSeconds(0)
}


},1000)

return()=>{
clearInterval(timer);
}


})



    return{
       minutes,
       seconds,
       setSeconds,
       setMinutes,
       timer,

    }
}