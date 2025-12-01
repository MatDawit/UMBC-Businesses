# UMBC Businesses

A React starter application showcasing businesses and services available at the UMBC (University of Maryland, Baltimore County) campus.

## Features

- 🏠 **Home Page**: Browse all businesses on campus with a beautiful grid layout
- 🏢 **Business Pages**: Detailed pages for each business with contact information, hours, and features
- 📧 **Contact Us**: A contact form for users to reach out
- 🔍 **SEO Optimized**: Built-in SEO with react-helmet-async for better search engine visibility
- 📱 **Responsive Design**: Works great on desktop, tablet, and mobile devices

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router 7** - Client-side routing
- **React Helmet Async** - SEO optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MatDawit/UMBC-Businesses.git
   cd UMBC-Businesses
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── BusinessCard.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── SEO.jsx
├── data/               # Sample data
│   └── businesses.js
├── pages/              # Page components
│   ├── Business.jsx
│   ├── Contact.jsx
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## License

This project is for educational purposes.
