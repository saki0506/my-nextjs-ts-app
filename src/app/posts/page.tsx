const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;