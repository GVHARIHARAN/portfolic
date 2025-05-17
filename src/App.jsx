
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import One from '../src/portfolio'; // Corrected import path
// import Sample from '../src/pro1';
// import Order from '../src/pro1'; // Uncomment when needed
// import Sum from '../src/components/navbar'; // Typo fixed: components, navbar

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<One />} />
        {/* <Route path="/pro1" element={<Sample />} /> */}
        {/* <Route path="/pro1" element={<Order />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
