"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogForm from "../../components/BlogForm";
import { Blog } from "../../types";

interface BlogPageProps {
  params: { id?: string };
}

export default function EditBlogPage({ params }: BlogPageProps) {
  const router = useRouter();
  const [blog, setBlog] = useState<Partial<Blog> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isEditing = params.id && params.id !== "new";

  useEffect(() => {
    if (isEditing) {
      setLoading(true);
      fetch(`/api/admin/blogs/${params.id}`)
        .then(async res => {
          if (!res.ok) {
            const text = await res.text();
            throw new Error(text || "Failed to fetch blog");
          }
          return res.json();
        })
        .then(data => setBlog(data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [params.id]);

  const handleSubmit = async (data: Partial<Blog>) => {
    try {
      const res = await fetch(`/api/admin/blogs/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update blog");
      router.push("/admin/blogs");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to update blog");
    }
  };

  if (loading) return <p className="p-6">Loading blog...</p>;
  if (error) return <p className="p-6 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>
        <BlogForm
          initialData={blog ?? undefined}
          onSubmit={handleSubmit}
          onClose={() => router.push("/admin/blogs")}
        />
      </div>
    </div>
  );
}
