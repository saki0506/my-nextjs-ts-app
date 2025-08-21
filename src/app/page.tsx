"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => router.push("/posts")}
        >
          Create Post
        </button>
      </div>
      <ul className="space-y-4">
        {data.map((post: any) => (
          <li key={post.id} className="border p-4 rounded shadow">
            <Link
              href={`/posts/${post.id}`}
              className="hover:text-blue-500 hover:underline"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}