import SEO from '../components/SEO';
import BusinessCard from '../components/BusinessCard';
import { businesses } from '../data/businesses';
import './Home.css';

function Home() {

  return (
    <div className="home">
      <SEO 
        title="Home"
        description="Discover all the businesses and services available at UMBC campus. From cafes to bookstores, fitness centers to tech support."
        keywords="UMBC, businesses, campus, services, food, retail, university, Baltimore"
      />
      
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to UMBC Businesses</h1>
          <p className="hero-subtitle">
            Discover all the amazing businesses and services available on the UMBC campus
          </p>
        </div>
      </section>

      <section className="businesses-section">
        <div className="container">
          <h2 className="section-title">Featured Businesses</h2>
          <div className="businesses-grid">
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
