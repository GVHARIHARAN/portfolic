// // // import React, { useState } from 'react';
// // // import '/src/practice.css'; // Ensure this path is correct
// // // // function ContactMe() {
// // // //   const [formData, setFormData] = useState({
// // // //     name: '',
// // // //     email: '',
// // // //     phone: '',
// // // //     message: ''
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value
// // // //     });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log('Form submitted:', formData);


// // // //     // You can add logic to send the form data to an API or email service here
// // // //   };

// // // //   return (
// // // //     <div className="contact-container">
// // // //       <h2>Get in Touch</h2>
// // // //       <form onSubmit={handleSubmit} className="contact-form">
// // // //         <input
// // // //           type="text"
// // // //           name="name"
// // // //           placeholder="Your Name"
// // // //           value={formData.name}
// // // //           onChange={handleChange}
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           name="email"
// // // //           placeholder="Your Email"
// // // //           value={formData.email}
// // // //           onChange={handleChange}
// // // //           required
// // // //         />
// // // //          <input
// // // //           type="mobile"
// // // //           name="phone"
// // // //           placeholder="Your Phone Number"
// // // //           value={formData.phone}

// // // //           maxLength={10}
// // // //           onChange={handleChange}
// // // //           required
// // // //         />
// // // //         <textarea
// // // //           name="message"
// // // //           placeholder="Your Message"
// // // //           value={formData.message}
// // // //           onChange={handleChange}
// // // //           required
// // // //         />
// // // //         <button type="submit"className='btn'>Submit</button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }


// // // export default ContactMe;

// // import React from 'react'
// // import '/src/practice.css'; 

// // const practice = () => {

// //   document.addEventListener("DOMContentLoaded", () => {
// //     const skillItems = document.querySelectorAll(".skill-item");

// //     skillItems.forEach(item => {
// //       const label = item.querySelector(".skill-label");
// //       const percent = item.querySelector(".skill-percent");

// //       label.addEventListener("mouseover", () => {
// //         percent.style.display = "block";
// //         percent.style.transition = "opacity 0.5s";
// //         percent.style.opacity = 1;
// //       });

// //       label.addEventListener("mouseout", () => {
// //         percent.style.opacity = 0;
// //         setTimeout(() => {
// //           percent.style.display = "none";
// //         }, 500); // match transition
// //       });
// //     });
// //   });

// //   return (
// //     <>
// //       <span className="d-flex justify-content-between skill-item">
// //         <h4 className="skill-label">HTML</h4>
// //         <p className="skill-percent" style={{ display: "none" }}>90%</p>
// //       </span>

// //     </>
// //   )
// // }

// // export default practice


// import React, { useEffect, useState } from 'react'
// import '/src/practice.css';
// import img from'../src/men.jpg'
// const practice = () => {
//   const [text, setText] = useState('');
//   const [showing, setShowing] = useState(true);
//   useEffect(() => {
//     setShowing(false)
//     setTimeout(() => {
//       setText(
//         'im waiting'
//       )

//     }, 3000)
//   }, [])
//   return (
//     <>
     
//         {showing ? (
//           <div className='d-flex justify-content-center align-items-center imgf'>
//           <img src={img} alt="" height={100} width={100} />
//           </div>
//         ) : (
//           <h3>dddddddd</h3>
        
//         )}
     
//       {/* <div className="loader"></div> */}
//       <div className="container-fluid  p-5">
//         <div className="row d-flex justify-content-between  skills">

//           <div className="col">
//             <h2 className='abo-click'>About</h2>
//             <hr style={{ color: ' #82a448' }} />
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//           </div>
//           <div className="col">
//             <h2 className='edc-click m'>Education</h2>
//             <hr style={{ color: ' #82a448' }} />
//             <div className="row d-flex justify-content-between">

//               <div className="col">
//                 <h2>SSLC</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//               </div>
//               <div className="col">
//                 <h2>HSS</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default practice
// Preloader.jsx
import React from 'react';
import '/src/practice.css'; // external CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
