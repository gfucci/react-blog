//CSS
import './App.css';

//Router-Dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Pages

import About from './pages/about/About';
import Home from './pages/home/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
