import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
     </Routes>
    </div>
  );
}

export default App;
