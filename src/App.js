//CSS
import './App.css';

//appications
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Context
import { AuthProvider } from './context/AuthContext';

//Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//Pages
import About from './pages/about/About';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import DashBoard from './pages/dashboard/DashBoard';
import CreatePost from './pages/createPost/CreatePost';

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
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to="/" /> } />
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/" /> } />
              <Route path='/dashboard' element={user ? <DashBoard /> : <Navigate to="/" /> } />
              <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to="/" /> } />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
