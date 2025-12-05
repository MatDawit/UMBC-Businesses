// Sample business data for UMBC Campus
export const CATEGORIES = ['Hair', 'Cosmetics', 'Arts', 'Food'];

export const businesses = [
  {
    id: 1,
    name: "CutzzByDan",
    description:
      "A cozy café offering coffee, pastries, and light meals. Perfect for studying or catching up with friends.",
    category: "Hair",
    featured: true,
    location: "Erikson Hall, Room 254",
    hours: "Undetermined",
    phone: "(240) 486-4106",
    email: "damissa1@umbc.edu",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
    features: ["Fades", "Trims", "Styles", "Appointments"],
  },
  {
    id: 2,
    name: "GritGlow Cosmetics",
    description:
      "Cosmetics and skincare essentials for everyday looks—plus occasional student brand pop-ups.",
    category: "Cosmetics",
    featured: true,
    location: "Commons Building, Ground Floor",
    hours: "Mon-Fri: 10:00 AM - 6:00 PM, Sat: 11:00 AM - 4:00 PM",
    phone: "(410) 555-0102",
    email: "gritglow@umbc.edu",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
    features: ["Skincare", "Makeup", "Student Discounts", "New Arrivals"],
  },
  {
    id: 3,
    name: "Campus Print & Copy",
    description:
      "Professional printing services for students and faculty. From documents to posters, we've got you covered.",
    category: "Arts",
    featured: true,
    location: "Library Building, Level 1",
    hours: "Mon-Fri: 8:00 AM - 8:00 PM",
    phone: "(410) 555-0103",
    email: "printcopy@umbc.edu",
    image:
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=400&h=300&fit=crop",
    features: ["Color Printing", "Large Format", "Binding Services", "Rush Orders"],
  },
  {
    id: 4,
    name: "Retriever Cuts",
    description:
      "Haircuts and quick styling on campus—great for interviews, events, and keeping it fresh.",
    category: "Hair",
    featured: true,
    location: "University Center",
    hours: "Mon-Fri: 9:00 AM - 7:00 PM, Sat: 10:00 AM - 3:00 PM",
    phone: "(410) 555-0104",
    email: "retrievercuts@umbc.edu",
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=400&h=300&fit=crop",
    features: ["Walk-ins", "Appointments", "Basic Styling", "Student Pricing"],
  },
  {
    id: 5,
    name: "Canvas Corner",
    description:
      "Art supplies, prints, and small gifts—perfect for class projects and decorating your space.",
    category: "Arts",
    featured: false,
    location: "Fine Arts Building, Lobby",
    hours: "Mon-Fri: 11:00 AM - 5:00 PM",
    phone: "(410) 555-0105",
    email: "canvascorner@umbc.edu",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    features: ["Sketchbooks", "Paints", "Prints", "Gift Items"],
  },
  {
    id: 6,
    name: "True Grit's Dining Hall",
    description:
      "All-you-can-eat dining experience with diverse food stations featuring international cuisines.",
    category: "Food",
    featured: false,
    location: "True Grit's Building",
    hours: "Mon-Sun: 7:00 AM - 10:00 PM",
    phone: "(410) 555-0106",
    email: "truegrits@umbc.edu",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop",
    features: ["Meal Plans", "Allergen Info", "International Cuisine", "Late Night Menu"],
  },
];

export const getBusinessById = (id) => {
  return businesses.find((business) => business.id === parseInt(id));
};

export const getBusinessesByCategory = (category) => {
  return businesses.filter((business) => business.category === category);
};

export const getAllCategories = () => {
  // Keeps your category row exactly: Hair, Cosmetics, Arts, Food
  return CATEGORIES;
};
