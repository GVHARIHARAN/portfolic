import React, { useState } from 'react'

const memo = () => {
    function App()

    const [number, setNumber] = useState(0);

    const [otherState, setOtherState] = useState(false);

    const calculateSquare = useMemo(() => {

        console.log('Calculating square...');

        return number * number;

    }, [number]);

    return (
        <>
            <div>

                <h1>Square of {number}: {calculateSquare}</h1>

                <button onClick={() => setNumber(number + 1)}>

                    Increment Number

                </button>

                <button onClick={() => setOtherState(!otherState)}>

                    Toggle Other State

                </button >

            </div >
        </>

    );
}

export default memo