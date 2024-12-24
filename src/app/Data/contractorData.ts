// data.ts - Sample Data File
export interface Review {
  clientName: string;
  rating: number;
  reviewText: string;
  jobDate: string;
  location: string;
}

export interface Contractor {
  id: string;
  profileImage: string;
  name: string;
  job: string;
  position?: string;
  company?: string;
  location: string;
  stars: number;
  status: "active" | "inactive";
  joinedYear: string;
  about: string; // New field for contractor's description
  yearsOfExperience: number; // New field for years of experience
  reviews: Review[]; // New field for reviews
}

export const contractors: Contractor[] = [
  {
      id: "1",
      profileImage: 'https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?t=st=1732981338~exp=1732984938~hmac=77a34b8c0afb852aae27eb5d22f6f5b28f91324bcc95a854354ab9452eb8d234&w=900',
      name: 'John Doe',
      job: 'Plumber',
      location: 'Texas Jigsaw',
      stars: 4,
      status: 'active',
      joinedYear: '2018',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto rem cumque sit tempora rerum? Voluptas accusantium distinctio rerum tempore molestiae et obcaecati debitis beatae corporis ab iusto eum, laborum unde.',
      yearsOfExperience: 10,
      reviews: [
          {
              clientName: 'Alice Johnson',
              rating: 5,
              reviewText: 'Great work, very professional and punctual!',
              jobDate: 'January 15, 2024',
              location: 'New York, NY',
          },
          {
              clientName: 'Bob Smith',
              rating: 4,
              reviewText: 'Good work, though the job took a little longer than expected.',
              jobDate: 'February 10, 2024',
              location: 'Brooklyn, NY',
          },
      ],
  },
  {
      id: "2",
      profileImage: "/images/contractor2.jpg",
      name: "Jane Smith",
      job: "Plumber",
      location: "Abuja, Nigeria",
      stars: 5,
      status: "inactive",
      joinedYear: "2020",
      about: 'Experienced plumber with a focus on quality and customer satisfaction.',
      yearsOfExperience: 5,
      reviews: [
          {
              clientName: 'Mark Brown',
              rating: 5,
              reviewText: 'Outstanding service! Highly recommended.',
              jobDate: 'March 5, 2024',
              location: 'Abuja, Nigeria',
          },
          {
              clientName: 'Sarah White',
              rating: 4,
              reviewText: 'Good service overall, will hire again.',
              jobDate: 'April 12, 2024',
              location: 'Abuja, Nigeria',
          },
      ],
  },
  // Add more sample contractors as needed
];
