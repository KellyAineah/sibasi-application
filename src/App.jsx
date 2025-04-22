import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Components/Home'
import './App.css'


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Login />} />

       </Routes> 
      
    </Router>
  )
}

export default App
