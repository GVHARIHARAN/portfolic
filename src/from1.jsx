import React from 'react'

const Summa = (props) => {
    const{sum}=props;

  return (
    <>
    {sum.map((use)=>(
        <>
            <p>{use.pname}</p>
            <p>{use.pprice}</p>
            <p>{use.rating}</p>
        </>
    ))}
    </>
  )

}

export default Summa