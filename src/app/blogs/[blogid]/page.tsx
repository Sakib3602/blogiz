interface P {
  params: {
    blogid: string;
  };
}

const BlogDetailsPage = async ({ params }: P) => {
  const { blogid } = params;
  const res = await fetch(`http://localhost:3001/blogs/${blogid}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return <div></div>;
};

export default BlogDetailsPage;
