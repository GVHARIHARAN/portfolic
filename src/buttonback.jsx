import React from 'react'

const buttonback = ({onINcrement}) => {
    console.log("second page render");
    
  return (
    <>
    <div>{onINcrement}</div>
    </>
  )
}

export default React.memo(buttonback)