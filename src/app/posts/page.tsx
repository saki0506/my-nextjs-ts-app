import PostList from "@/components/PostList";
import { revalidatePath } from "next/cache";

export default async function Posts() {
  const createPost = async (data: FormData) => {
    "use server"; // 明示的にサーバーサイドで実行することを示す
    const title = data.get("title") as string;
    const content = data.get("content") as string;
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

    revalidatePath("/posts"); // 現在のページを再生成する
  };

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
      <PostList />
    </div>
  );
}