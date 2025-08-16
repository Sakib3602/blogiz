import BlogCard from "@/components/ui/BlogCard";
import React from "react";
interface BlogS {
  id: string;
  title: string;
  description: string;
  publish_date: string; // ISO date string, e.g., "2024-03-01"
  author_name: string;
  blog_image: string; // URL string
  total_likes: string | number; // can be string or number depending on API
}
const BlogAllPage = async () => {
  const res = await fetch("http://localhost:3001/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div className="grid grid-cols-2 py-10 gap-4 mx-auto w-[90%]">
      {blogs.map((blog: BlogS) => (
        <BlogCard key={blog.id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default BlogAllPage;
