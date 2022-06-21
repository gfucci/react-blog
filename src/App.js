//CSS
import './App.css';

//Router-Dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Pages

import About from './pages/about/About';
import Home from './pages/home/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
