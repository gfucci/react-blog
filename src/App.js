//CSS
import './App.css';

//appications
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/use.Authentication';

//Context
import { AuthProvider } from './context/AuthContext';

//Pages

import About from './pages/about/About';
import Home from './pages/home/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {

  const { auth } = useAuthentication()
  const [user, setUser] = useState(undefined)

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className='App'>
      <AuthProvider value={ user }>
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
      </AuthProvider>
    </div>
  );
}

export default App;
