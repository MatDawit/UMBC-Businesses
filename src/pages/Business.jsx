import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getBusinessById } from '../data/businesses';
import './Business.css';

function Business() {
  const { id } = useParams();
  const business = getBusinessById(id);

  if (!business) {
    return (
      <div className="business-page">
        <SEO 
          title="Business Not Found"
          description="The requested business could not be found."
        />
        <div className="not-found">
          <h1>Business Not Found</h1>
          <p>Sorry, we couldn&apos;t find the business you&apos;re looking for.</p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="business-page">
      <SEO 
        title={business.name}
        description={business.description}
        keywords={`UMBC, ${business.name}, ${business.category}, campus business`}
      />

      <div className="business-hero">
        <img src={business.image} alt={business.name} className="business-hero-image" />
        <div className="business-hero-overlay">
          <span className="business-category-badge">{business.category}</span>
          <h1>{business.name}</h1>
        </div>
      </div>

      <div className="business-container">
        <div className="business-main">
          <section className="business-section">
            <h2>About</h2>
            <p className="business-about">{business.description}</p>
          </section>

          <section className="business-section">
            <h2>Features & Services</h2>
            <div className="features-grid">
              {business.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="business-sidebar">
          <div className="sidebar-card">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <span className="info-label">📍 Location</span>
              <span className="info-value">{business.location}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">🕐 Hours</span>
              <span className="info-value">{business.hours}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">📞 Phone</span>
              <span className="info-value">{business.phone}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">📧 Email</span>
              <span className="info-value">{business.email}</span>
            </div>
          </div>

          <Link to="/" className="btn-back">
            ← Back to All Businesses
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default Business;
