import { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import BusinessCard from '../components/BusinessCard';
import { businesses, getAllCategories } from '../data/businesses';
import './FindBusinesses.css';

function FindBusinesses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = getAllCategories();

  // Filter businesses based on search term and selected categories
  const filteredBusinesses = useMemo(() => {
    return businesses.filter((business) => {
      // Filter by search term (case-insensitive)
      const matchesSearch = business.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Filter by categories (if any selected, show businesses in those categories)
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(business.category);

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="find-businesses">
      <SEO
        title="Find Businesses"
        description="Search and browse all businesses available on the UMBC campus. Filter by category and find exactly what you need."
        keywords="UMBC, businesses, search, find, campus, services"
      />

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find Businesses</h1>
          <p className="hero-subtitle">
            Search and discover all businesses available on campus
          </p>
        </div>
      </section>

      <section className="find-section">
        <div className="container">
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search by business name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search businesses by name"
            />
          </div>

          {/* Category Filters */}
          <div className="filters-container">
            <h2 className="filters-title">Filter by Category</h2>
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    selectedCategories.includes(category) ? 'active' : ''
                  }`}
                  onClick={() => toggleCategory(category)}
                  aria-pressed={selectedCategories.includes(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="results-container">
            <h2 className="results-title">
              {filteredBusinesses.length > 0
                ? `Found ${filteredBusinesses.length} business${
                    filteredBusinesses.length !== 1 ? 'es' : ''
                  }`
                : 'No businesses found'}
            </h2>

            {filteredBusinesses.length > 0 ? (
              <div className="businesses-grid">
                {filteredBusinesses.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>
                  Try adjusting your search or filters to find what you're looking
                  for.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FindBusinesses;
