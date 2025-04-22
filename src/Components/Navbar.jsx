import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-name">Sibasi Project</div>
      
     
      <ul className="navbar-list">
        <li><a href="#">Home</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
