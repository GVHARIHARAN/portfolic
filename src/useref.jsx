import React, { useState,useRef } from 'react'

const useref = () => {
    const[count,setCount]=useState(0)

    const handlecount=()=>{
        setCount(count+1)
    //    other statement
    //  setCount.count++ 

    }
    const countRef =useRef(0)

    const handlecountref=()=>{
        var count =countRef.current++
        console.log(count);
        
    }
    console.log("rendering");
    
  return (
    <>
    <p>the count is  {count}</p>
    <button onClick={handlecount}>count</button>


    <p>the count is  {countRef.current}</p>
    <button onClick={handlecountref}>ref</button>
    </>
  )
}

export default useref