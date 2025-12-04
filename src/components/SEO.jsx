import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

function SEO({ title, description, keywords, canonicalUrl }) {
  const siteName = "UMBC Businesses";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="UMBC" />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string
};

SEO.defaultProps = {
  title: '',
  description: 'Discover all the businesses and services available at UMBC campus. From cafes to bookstores, find everything you need.',
  keywords: 'UMBC, businesses, campus, services, food, retail, university',
  canonicalUrl: ''
};

export default SEO;
