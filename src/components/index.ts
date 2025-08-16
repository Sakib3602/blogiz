export interface BlogS {
  id: string;
  title: string;
  description: string;
  publish_date: string; // ISO date string, e.g., "2024-03-01"
  author_name: string;
  blog_image: string; // URL string
  total_likes: string | number; // can be string or number depending on API
}