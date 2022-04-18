
// import './App.css';

// import Header from './component/Header/Header';

// import Register from './component/Register/Register';
// import Login from './component/Login/Login';
// import Pricing from './component/Pricing/Pricing';
// import NotFound from './component/NotFound/NotFound';
// import RequireAuth from './RequireAuth/RequireAuth'


// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/Services" element={<Services/>} />
//         <Route path="/Register" element={<Register/>} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Pricing" element={
//           <RequireAuth>
//             <Pricing/>
//           </RequireAuth>
//         } />
//         <Route path="/*" element={<NotFound/>} />
        
//      </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar'
import React from 'react';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Login from './component/Login/Login';
import RequireAuth from './RequireAuth/RequireAuth';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/services" element={ 
        <RequireAuth>
          <Services />
        </RequireAuth>
        } />
        <Route path="/login" element={ <Login/> }/>
    </Routes>
    </div>
  );
};

export default App;