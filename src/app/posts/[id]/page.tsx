"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const fetchDetail = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const deletePost = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to delete data");
  }
  return id;
};

export default function PostDetail({ params }: { params: { id: string } }) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const postId = Number(params.id);

  const { data, error, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchDetail(postId),
  });

  const mutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      router.push("/");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-700 mb-4">{data.body}</p>
      <button
        onClick={() => mutation.mutate(postId)}
        className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete Post
      </button>
      {mutation.isError && (
        <div className="mt-4 text-red-500">Error deleting post</div>
      )}
    </div>
  );
}