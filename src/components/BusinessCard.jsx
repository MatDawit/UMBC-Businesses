import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BusinessCard.css';

function BusinessCard({ business }) {
  return (
    <div className="business-card">
      <div className="business-card-image">
        <img src={business.image} alt={business.name} />
        <span className="business-category">{business.category}</span>
      </div>
      <div className="business-card-content">
        <h3 className="business-name">{business.name}</h3>
        <p className="business-description">{business.description}</p>
        <div className="business-location">
          <span className="location-icon">📍</span>
          {business.location}
        </div>
        <Link to={`/business/${business.id}`} className="business-link">
          View Details →
        </Link>
      </div>
    </div>
  );
}

BusinessCard.propTypes = {
  business: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default BusinessCard;
