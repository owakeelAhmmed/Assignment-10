import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Services from './component/Services/Services';
import Register from './component/Register/Register';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
