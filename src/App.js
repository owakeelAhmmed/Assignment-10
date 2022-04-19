
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar'
import React from 'react';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Login from './component/Login/Login';
import RequireAuth from './RequireAuth/RequireAuth';
import Footer from './component/Footer/Footer';
import Pricing from './component/Pricing/Pricing';
import Blogs from './component/Blogs/Blogs';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/services" element={ <Services />} />
        <Route path="/pricing" element={
          <RequireAuth>
            <Pricing />
          </RequireAuth>
        } />
        <Route path="/blogs" element={ <Blogs/> } />
        <Route path="/login" element={ <Login/> }/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;