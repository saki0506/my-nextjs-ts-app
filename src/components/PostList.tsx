export default async function PostList() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?limit=10"
  ).then((response) => response.json());

  return (
    <>
      <h1 className="text-2xl font-bold my-6 text-center">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="border border-gray-300 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}