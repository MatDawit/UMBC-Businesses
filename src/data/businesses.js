// Sample business data for UMBC Campus
export const businesses = [
  {
    id: 1,
    name: "Retriever's Café",
    description: "A cozy café offering coffee, pastries, and light meals. Perfect for studying or catching up with friends.",
    category: "Food & Beverage",
    location: "Commons Building, Room 101",
    hours: "Mon-Fri: 7:00 AM - 9:00 PM, Sat-Sun: 9:00 AM - 6:00 PM",
    phone: "(410) 555-0101",
    email: "retrieverscafe@umbc.edu",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
    features: ["WiFi", "Study Space", "Vegan Options", "Mobile Ordering"]
  },
  {
    id: 2,
    name: "UMBC Bookstore",
    description: "Your one-stop shop for textbooks, school supplies, UMBC merchandise, and tech accessories.",
    category: "Retail",
    location: "Commons Building, Ground Floor",
    hours: "Mon-Fri: 8:30 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM",
    phone: "(410) 555-0102",
    email: "bookstore@umbc.edu",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop",
    features: ["Textbook Rental", "Price Match", "Online Orders", "UMBC Apparel"]
  },
  {
    id: 3,
    name: "Campus Print & Copy",
    description: "Professional printing services for students and faculty. From documents to posters, we've got you covered.",
    category: "Services",
    location: "Library Building, Level 1",
    hours: "Mon-Fri: 8:00 AM - 8:00 PM",
    phone: "(410) 555-0103",
    email: "printcopy@umbc.edu",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=400&h=300&fit=crop",
    features: ["Color Printing", "Large Format", "Binding Services", "Rush Orders"]
  },
  {
    id: 4,
    name: "Retriever Fitness Center",
    description: "State-of-the-art fitness facility with cardio equipment, weight training, and group fitness classes.",
    category: "Health & Fitness",
    location: "RAC Building",
    hours: "Mon-Fri: 6:00 AM - 11:00 PM, Sat-Sun: 8:00 AM - 8:00 PM",
    phone: "(410) 555-0104",
    email: "fitness@umbc.edu",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    features: ["Personal Training", "Group Classes", "Pool Access", "Equipment Rental"]
  },
  {
    id: 5,
    name: "Tech Solutions Hub",
    description: "IT support and tech services for the UMBC community. Get help with devices, software, and more.",
    category: "Technology",
    location: "Engineering Building, Room 205",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM",
    phone: "(410) 555-0105",
    email: "techsolutions@umbc.edu",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    features: ["Device Repair", "Software Support", "Network Help", "Data Recovery"]
  },
  {
    id: 6,
    name: "True Grit's Dining Hall",
    description: "All-you-can-eat dining experience with diverse food stations featuring international cuisines.",
    category: "Food & Beverage",
    location: "True Grit's Building",
    hours: "Mon-Sun: 7:00 AM - 10:00 PM",
    phone: "(410) 555-0106",
    email: "truegrits@umbc.edu",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop",
    features: ["Meal Plans", "Allergen Info", "International Cuisine", "Late Night Menu"]
  }
];

export const getBusinessById = (id) => {
  return businesses.find(business => business.id === parseInt(id));
};

export const getBusinessesByCategory = (category) => {
  return businesses.filter(business => business.category === category);
};

export const getAllCategories = () => {
  return [...new Set(businesses.map(business => business.category))];
};
