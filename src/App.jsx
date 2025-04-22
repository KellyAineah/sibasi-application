import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Components/Home'
import './App.css'
import Dashboard from './Components/Dashboard'
import { AuthProvider } from './Components/Authcontext'


function App() {
  

  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />

       </Routes> 
      
    </Router>
    </AuthProvider>
  )
}

export default App
