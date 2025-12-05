import { Link } from 'react-router-dom';
import umbcLogo from '/public/UMBC-logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" aria-label="UMBC Businesses home">
          <img
            src={umbcLogo}
            alt="UMBC Businesses"
            className="navbar-logo"
          />
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/business/1" className="navbar-link">Sample Business</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
