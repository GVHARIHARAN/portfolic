import React, { useState } from 'react'
// import Two from '../src/demo2'
const demo1 = (props) => {
   function handleOnchange(){
    const app=['start','stop','exit']
    const sum=Math.floor(Math.random()*3)
    return app[sum]
   }
    return (
        <>
         <div>

            <p>let's {handleOnchange()}</p>
         </div>

            {/* <p>{user}</p> */}
            {/* <div>yenkku ennoru per irukku {props.user}</div> */}
            {/* <Two user={props.user} /> */}

            
        </>

    )

}

export default demo1