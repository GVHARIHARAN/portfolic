import React, { useEffect, useRef, useState } from 'react'

const useref2 = () => {
    const [value, setValue] = useState('')

    const prevRef = useRef()

    useEffect(() => {
        prevRef.current = value
        console.log("pre rendering");

    }, [value])
    console.log("rendering");

    return (
        <>
            <div className="pt-5 text-danger fs-3 fw-bolder">Use Ref Method</div>
            <input type="text" value={value} onChange={((e) => { setValue(e.target.value) })} />
            <p>the value is  {value}</p>
            <p>the value is  {prevRef.current}</p>
        </>
    )
}

export default useref2