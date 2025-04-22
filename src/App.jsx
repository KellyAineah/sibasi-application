import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Components/Home'
import './App.css'
import Dashboard from './Components/Dashboard'


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />

       </Routes> 
      
    </Router>
  )
}

export default App
