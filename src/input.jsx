import React, { useState } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles

// AOS.init();
const input = () => {
  const[user,setUser]=useState([{
    id:'',
    name:'',
    gender:''
  }])
  const handleOnchange=(e)=>{
    const{name,value}=e.target;
    setUser({...user,[name]:value})
  }
  const sumbit=()=>{
    console.log(user);
    
  }
  return (
    <>
    <label >id</label> <input type="text" name="id" onChange={handleOnchange} />
    <label >name</label> <input type="text"  name="name" onChange={handleOnchange} />
    <label >gender</label> <input type="text"  name="gender" onChange={handleOnchange} />
    <button onClick={sumbit}>submit</button>
    </>
  )
}

export default input