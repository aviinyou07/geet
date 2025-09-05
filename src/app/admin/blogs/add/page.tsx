"use client";

import { useRouter } from "next/navigation";
import BlogForm from "../../components//BlogForm";
import { Blog } from "../../types";

export default function AddBlogPage() {
  const router = useRouter();

  const handleSubmit = async (data: Partial<Blog>) => {
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to add blog");
      router.push("/admin/blogs");
    } catch (err) {
      alert("Failed to add blog");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Add Blog</h1>
        <BlogForm initialData={undefined} onSubmit={handleSubmit} onClose={() => router.push("/admin/blogs")} />
      </div>
    </div>
  );
}
