import React, { useState } from 'react'
import Summa from '../src/from1'
import Nav from'../src/componments/navber'
const from = () => {
    const [product, setUser] = useState([{
        pname: '',
        pprice: '',
        rating: ''

    }])
    const [products, setProducts] = useState([

    ])
    const handleOnchange = (e) => {
        const [name, value] = e.target;
        setUser({ ...product, [name]: value })
    }
    const sumbit = () => {
        products.push(product)
        setProducts({ ...products })

        setUser({
            pname: '',
            pprice: '',
            rating: ''
        })
    }

    return (
        <>
            <label>pname</label> <input type="text" name="pname" onChange={handleOnchange} />
            <label>pprice</label> <input type="text" name="pprice" onChange={handleOnchange} />
            <label>rating</label> <input type="text" name="rating" onChange={handleOnchange} />
            <button onClick={sumbit}>submit</button>
            <Summa summ ={products}/>
            <Nav/>
        </>
    )
}

export default from