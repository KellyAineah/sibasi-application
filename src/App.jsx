import Navbar from './Components/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Home from './Components/Home'


function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <Login />
    </>
  )
}

export default App
