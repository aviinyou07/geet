"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Blog } from "../types";
import BlogTable from "../components/BlogTable";
import Pagination from "../components/Pagination";

export default function BlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Search & Pagination
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBlogs(currentPage, search);
  }, [currentPage, search]);

  const fetchBlogs = async (page = 1, query = "") => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/blogs?search=${encodeURIComponent(query)}&page=${page}&limit=5`);
      if (!res.ok) throw new Error("Failed to fetch blogs");

      const { data, pagination } = await res.json();
      setBlogs(data);
      setTotalPages(pagination.totalPages);
      setCurrentPage(pagination.page);
    } catch {
      setError("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    const prevBlogs = blogs;
    setBlogs(prev => prev.filter(b => b.id !== id));
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
    } catch {
      alert("Delete failed");
      setBlogs(prevBlogs); // rollback
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => router.push("/admin/blogs/add")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add Blog
          </button>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <p>Loading blogs...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <>
          <BlogTable
            blogs={blogs}
            onEdit={blog => router.push(`/admin/blogs/${blog.id}`)}
            onDelete={handleDelete}
          />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={page => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
}
