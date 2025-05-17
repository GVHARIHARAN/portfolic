import React from 'react'

const userr = (props) => {
    const {item}=props
  return (
   
    <>
    {item .map((use)=>(
    <div>
        <p>{use.name}</p>
        <p>{use.age}</p>
        <p>{use.clg}</p>
    </div>
    ))}
    </>
  )
}

export default userr