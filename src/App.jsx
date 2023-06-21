import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Offers from './pages/Offers'
import ForgotPassword from './pages/ForgotPassword'
import Header from './components/Header'

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
