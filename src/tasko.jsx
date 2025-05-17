import React from 'react'
import { useState } from 'react'
import User from'../src/userr'
const tasko = () => {
  const[details,setDetails]=useState([{
      name:'hari',age:20,clg:'AMC clg'
  },
  {
    name:'shyam',age:21,clg:'AMC clg'
  },{
    name:'raju',age:19,clg:'AMC clg'
  },{
    name:'kathir',age:22,clg:'AMC clg'
  },{
    name:'rajesh',age:20,clg:'AMC clg'
  }])
  return (
    <>
    <User item={details}/>
    </>
  )
}

export default tasko