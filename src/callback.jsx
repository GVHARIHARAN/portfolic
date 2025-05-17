 import React, { useCallback, useState } from 'react'
 import Buttonback from './buttonback'
 
 const callback = () => {
    const[count,setCount]=useState(0)

    const Increment=()=>{
        setCount(count+1)
    }
    const IncrementCount=useCallback(()=>{
        setCount(count+1)
    },[])
   return (
     <>
     <p>{count}</p>
     <button onClick={Increment}>Increment</button>

     <Buttonback onINcrement ={IncrementCount}/>
     </>
   )
 }
 
 export default callback