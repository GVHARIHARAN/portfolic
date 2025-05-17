// pages/Portfolio.jsx
// import React, { useState, useEffect } from 'react';
// import Preloader from '../src/practice'; // adjust path as needed

// const Portfolio = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate initial loading (e.g., fetching content or images)
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // 2 seconds preloader

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Preloader />;
//   }

//   return (
//     <div className="portfolio-content">
//       <h1>My Portfolio</h1>
//       <p>Welcome! Explore my projects, skills, and background.</p>
//       {/* Insert portfolio cards, sections, etc. */}
//     </div>
//   );
// };

// export default Portfolio;
import React from 'react';
import '/src/preloader.css'; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// external CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="loader">   <DotLottieReact
      src="https://lottie.host/40e202bc-d6d9-4ea8-a3f4-9e444e2e2160/plqCldJGVY.lottie"
      loop
      autoplay
    /></div>
   
    </div>
  );
};

export default Preloader;

// import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const App = () => {
//   return (
//     <DotLottieReact
//       src="https://lottie.host/40e202bc-d6d9-4ea8-a3f4-9e444e2e2160/plqCldJGVY.lottie"
//       loop
//       autoplay
//     />
//   );
// };
