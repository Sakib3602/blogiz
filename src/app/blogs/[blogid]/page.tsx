import { BlogS } from "@/components";
import BlogDetails from "@/components/ui/BlogDetails";

interface P {
  params: {
    blogid: string;
  };
}
const generateStaticParams = async () => {
  const res = await fetch("http://localhost:3001/blogs");
  const blogs = await res.json();
  return blogs.slice(0,3).map((blo :BlogS)=> ({
    blogid : blo.id
  }))
}

const BlogDetailsPage = async ({ params }: P) => {
  const { blogid } = params;
  const res = await fetch(`http://localhost:3001/blogs/${blogid}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return <div className="py-10">
    <BlogDetails blog={blog}></BlogDetails>
  </div>;
};

export default BlogDetailsPage;
