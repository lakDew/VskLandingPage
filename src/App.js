import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
         <Routes>
     
      <Route path="/" element={<Home/>}/>
      <Route path="/contact_us" element={<ContactUs/>}/>
    </Routes>
    </div>
  );
}

export default App;
