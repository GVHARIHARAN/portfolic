import React from 'react'
import { useParams } from 'react-router-dom'
const taskorder = () => {
    // var { items } = props
    const {name}=useParams()
    return (
        <>
            <div className='container-fluid'>
            <div className="row">
            {/* {items.map((use) => ( */}
                <div className="col">

                    
                    <img src="" alt="" />

                </div>
            {/* ))} */}
            </div>

            {name}
            </div>

        </>
    )
}

export default taskorder