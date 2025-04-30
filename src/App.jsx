import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home'; 
import Dashboard from './Components/Dashboard';
import TodoList from './Components/TodoList';
import TextCards from './Components/TextCards';
import { AuthProvider } from './Components/Authcontext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="todo" element={<TodoList />} />
            <Route path="text-cards" element={<TextCards />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;