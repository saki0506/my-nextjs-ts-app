"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const addPost = async (newPost: { title: string; body: string }) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
};

const CreatePost = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "" || body === "") return;
    if (mutation.isPending) return;
    mutation.mutate(
      { title, body },
      {
        onSuccess: () => {
          setTitle("");
          setBody("");
          console.log("Post created successfully!");
        },
        onError: () => {
          console.error("Error creating post");
        },
      }
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={mutation.isPending}
        >
          Create Post
        </button>
      </form>
      {mutation.isPending && (
        <div className="mt-4 text-yellow-500">Creating post...</div>
      )}
      {mutation.isError && (
        <div className="mt-4 text-red-500">Error creating post</div>
      )}
      {mutation.isSuccess && (
        <div className="mt-4 text-green-500">Post created successfully!</div>
      )}
    </div>
  );
};

export default CreatePost;