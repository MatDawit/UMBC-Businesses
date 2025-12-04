import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">UMBC Businesses</h3>
          <p className="footer-text">
            Your guide to all businesses and services on the UMBC campus.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Contact</h4>
          <p className="footer-text">
            1000 Hilltop Circle<br />
            Baltimore, MD 21250<br />
            info@umbc.edu
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} UMBC Businesses. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
