import { Link } from 'react-router-dom';
import './Navbar.css';
import './AdminOrders.jsx';



function Navbar() {
  return (
    <nav className="navbar">
      <h1>Ismail Hotel</h1>
      <ul>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/book">Book</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        

       
       
      </ul>
    </nav>
  );
}

export default Navbar;
