import './Navbar.css';
import React, { useEffect, useState, useRef} from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { FaTachometerAlt } from 'react-icons/fa';



function Navbar() {
  // tracking the state of the dashboard dropdown and login status
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const dashboardRef = useRef(null);

  // Check if user is logged in 
  useEffect(() => {
    // Check local storage for login status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const toggleDashboardDropdown = () => {
    if (!isLoggedIn) {
      setDashboardOpen(!dashboardOpen);
    } else {
      navigate('/dashboard');
    }
  };

  const handleClickOutside = (event) => {
    //Dom element dashboardRef is attached to
    //check if the click is outside the dashboard dropdown
    if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
      setDashboardOpen(false);
    }
  };
 // Add event listener to handle clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      //no memory leak when component unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-name">
        <NavLink to='/'>Sibasi Project</NavLink>
      </div>
      
      <ul className="navbar-list">
        <li><NavLink to='/'>Home</NavLink></li>
        
        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </li>
        ) : (
          <li><NavLink to="/login">Login</NavLink></li>
        )}
        
        <li className='navbar-dashboard' ref={dashboardRef}>
          <div className='dashboard-icon' onClick={toggleDashboardDropdown}>
            <FaTachometerAlt className="icon" /> Dashboard
            {!isLoggedIn && (
              <div className={`dropdown-menu-dashboard ${dashboardOpen ? 'open' : ''}`}>
                <div className="dashboard-message">
                  <p>Please login to access the dashboard</p>
                  <button className="btn-dashboard" onClick={() => navigate('/login')}>Login</button>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;