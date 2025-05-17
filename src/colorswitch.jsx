import React from 'react'
import './portfolio.css'
const colorswitch = () => {

    const btn = document.getElementsByClassName('btn');
    const wrap = document.getElementsByClassName('wrap');
    const h3 = document.getElementsByClassName('h3');
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    function color() {
        let hextag = '#';

        for (let i = 1; i <= 6; i++) {
            hextag += randcolor()
        }
        wrap[0].style.backgroundColor = hextag;
        h3[0].innerHTML = hextag;
    }


    function randcolor() {

        let rand = Math.floor(Math.random() * 16);
        return hex[rand]
    }
    return (
        <>
            <div className="head d-flex justify-content-between">
                <h2 className='h2 p-2 mt-2'>Color Switch</h2>
                <h3 className='h3 p-2 mt-2'>#FFFFFF</h3>

            </div>
            <hr />

            <div className='wrap d-flex' style={{ height: '600px' }}>
                <span className=' d-flex justify-content-center align-self-center' style={{ width: '100%' }} >
                    <button className="btn btn-outline-danger" onClick={color}>change background</button>
                </span>
            </div>
        </>
    )
}

export default colorswitch

// import React, { useRef } from 'react';
// import './portfolio.css';

// const Portfolio = () => {
//     const wrapRef = useRef(null);
//     const h3Ref = useRef(null);
//     const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

//     function color() {
//         let hextag = '#';
//         for (let i = 1; i <= 6; i++) {
//             hextag += randcolor();
//         }
//         if (wrapRef.current && h3Ref.current) {
//             wrapRef.current.style.backgroundColor = hextag;
//             h3Ref.current.innerHTML = hextag;
//         }
//     }

//     function randcolor() {
//         let rand = Math.floor(Math.random() * 16);
//         return hex[rand];
//     }

//     return (
//         <>
//             <div className="head d-flex">
//                 <h2 className='col-11 h2 p-2 mt-2'>Color Switch</h2>
//                 <h3 ref={h3Ref} className='col-1 h3 p-2 mt-2'>#ffffff</h3>
//             </div>
//             <hr />
//             <div ref={wrapRef} className='wrap d-flex'>
//                 <span>
//                     <button className="btn btn-outline-danger" onClick={color}>Change Background</button>
//                 </span>
//             </div>
//         </>
//     );
// }

// export default Portfolio;

