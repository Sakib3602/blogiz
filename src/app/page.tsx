import BlogCard from "@/components/ui/BlogCard";
import LatestBlogCard from "@/components/ui/LatestBlogCard";
interface BlogS {
  id: string;
  title: string;
  description: string;
  publish_date: string; // ISO date string, e.g., "2024-03-01"
  author_name: string;
  blog_image: string; // URL string
  total_likes: string | number; // can be string or number depending on API
}
const HomePage = async () => {
  const res = await fetch("http://localhost:3001/blogs",{
    next : {
      revalidate : 30,
    }
  });
  const blogs = await res.json();
  return (
    <>
      <h1 className="text-center text-4xl my-5">Latest Blogs</h1>
      <p className="text-center text-lg text-gray-600">
        <i>
          This is a placeholder for the latest blogs. You can add your blog
          posts here.
        </i>
      </p>

      <div className="w-[90%] mx-auto my-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 mx-auto">
        {blogs.slice(0,2).map((blog: BlogS) => (
          <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
        ))}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {blogs.slice(2,5).map((blog: BlogS) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
      </div>
    </>
  );
};

export default HomePage;
