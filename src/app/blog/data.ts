// data.ts - Blog Data
export interface BlogPost {
    id: string;
    title: string;
    category: string;
    author: string;
    minutesRead: number;
    description: string;
    postDate: string;
    fullStory: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "How to Build a Successful Startup",
      category: "Business",
      author: "John Doe",
      minutesRead: 5,
      description: "In this article, we explore the key steps in building a successful startup...",
      postDate: "2024-12-20",
      fullStory: "Building a successful startup requires a lot of effort, strategy, and persistence. First, you need a solid idea... [full story continues]",
    },
    {
      id: "2",
      title: "The Future of Artificial Intelligence",
      category: "Technology",
      author: "Jane Smith",
      minutesRead: 7,
      description: "AI is rapidly changing the landscape of technology. Here's what the future holds...",
      postDate: "2024-12-22",
      fullStory: "Artificial Intelligence is evolving at an unprecedented pace. From natural language processing to machine learning... [full story continues]",
    },
    // Add more blog posts as needed
  ];
  