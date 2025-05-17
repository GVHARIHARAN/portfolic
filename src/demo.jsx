// import React from 'react'
// import { useState } from 'react'
// import One from '../src/demo1'
// const demo = () => {
//   var name = "malaa"

//   return (
//     <>
//        <One usser={name} />



//     </>

//   )
// }

// export default demo



// import  { useState } from 'react'
// import One from '../src/demo1'
// const Demo = () => {

//   const [user,setUser]= useState('')
//   var demo=()=>{
//     setUser('manik baasha')
//   }

//   return (
//    <>
//      <div>
//        <p>yen per baasha</p>
//        <p>yenakku enoru per irukku {user}</p>
//        <button onClick={demo}>Click</button>
//     </div>
//     <One user={user}/>
//    </>
//   )
// }

// export default Demo

// import React, { useState } from 'react'

// const demo = () => {

//   const [user, setuser] = useState([{
//     id: 1,
//     name: 'hari',
//     age: 23,
//   },
//   {
//     id: 2,
//     name: 'shyam',
//     age: 22,
//   }] )



//   return (
//     <>
//       <p>id:{user[0].id}</p>
//       <p>name:{user[1].name}</p>
//       <p>age:{user[0].age}</p>
//     </>

//   )
// }

// export default demo
import React, { useState } from 'react'
const demo = () => {
  const [user, setUser] = useState([{
    id: 1,
    name: "shyam",
    age: 20
  },
  {
    id: 2,
    name: "hari",
    age: 21

  }])
  return (
    <>
      <ul>{user.map((use) => (
        <li><p>name:{use.name},
          age:{use.age},
          id:{use.id}
        </p></li>

      ))}
      </ul>
    </>
  )
}

export default demo