import React from 'react'
import { Link } from 'react-router-dom'
const navber = () => {
    return (
        <>
            <div className="containet-fluid bg-black">
                <div className="row text-white">
                    <div className="col ">
                        <h1>Navber</h1>

                    </div>
                    <div className="col d-flex justify-content-end">
                        <ul>

                            <Link className='text-white' to='/from'><li className='list-inline-item p-2'>Home</li></Link>
                            <li className='list-inline-item p-2'>about</li>
                            <li className='list-inline-item p-2'>Concat</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default navber