// data.ts - Agents Data
export interface Agent {
  id: string;
  name: string;
  agency: string;
  location: string;
  profileImage: string;
  specialties: string[];
  contactInfo: {
    phone: string;
    email: string;
  };
  bio: string;
  listings: string[];  // List of properties handled by the agent
}

export const agents: Agent[] = [
  {
    id: "1",
    name: "John Smith",
    agency: "Dream Realty",
    location: "New York, NY",
    profileImage: 'https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?t=st=1732981338~exp=1732984938~hmac=77a34b8c0afb852aae27eb5d22f6f5b28f91324bcc95a854354ab9452eb8d234&w=900',
    specialties: ["Residential", "Luxury Homes", "Rentals"],
    contactInfo: {
      phone: "(123) 456-7890",
      email: "john.smith@dreamrealty.com",
    },
    bio: "John Smith has over 10 years of experience in the real estate market, specializing in luxury homes and residential properties. He is committed to finding his clients their dream homes.",
    listings: ["Property 1", "Property 2", "Property 3"],
  },
  {
    id: "2",
    name: "Jane Doe",
    agency: "Elite Properties",
    location: "Los Angeles, CA",
    profileImage: 'https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?t=st=1732981338~exp=1732984938~hmac=77a34b8c0afb852aae27eb5d22f6f5b28f91324bcc95a854354ab9452eb8d234&w=900',
    specialties: ["Commercial", "Luxury Rentals"],
    contactInfo: {
      phone: "(987) 654-3210",
      email: "jane.doe@eliteproperties.com",
    },
    bio: "With over 8 years of experience, Jane is a top real estate agent who specializes in high-end commercial properties and luxury rentals. She is known for her attention to detail and exceptional customer service.",
    listings: ["Property A", "Property B"],
  },
  // Add more agents as needed
];
