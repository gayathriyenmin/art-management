export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessonsCount: number;
  rating: number;
  reviewsCount: number;
  price: number;
  image: string;
  instructor: Instructor;
  highlights: string[];
  syllabus?: { week: number; title: string; content: string }[];
}
