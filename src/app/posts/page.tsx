import { revalidatePath } from "next/cache";

export default async function Posts() {
  const createPost = async (data: FormData) => {
    "use server";
    const title = data.get("title") as string;
    const content = data.get("content") as string;
    console.log("title", title);
    console.log("content", content);
    // ここでAPIとの通信を行う
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title, body: content, userId: 1 }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    revalidatePath("/posts");
  };

  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => response.json());

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Post</h1>
      <form action={createPost} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          placeholder="Content"
          rows={5}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
      <h1 className="text-2xl font-bold my-6 text-center">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="border border-gray-300 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
