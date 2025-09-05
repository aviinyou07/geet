"use client";

import { Blog } from "../types";

interface BlogTableProps {
  blogs: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
}

export default function BlogTable({ blogs, onEdit, onDelete }: BlogTableProps) {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="w-full table-auto border border-gray-300 bg-white">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Author</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Tags</th>
            <th className="border px-4 py-2">Featured</th>
            <th className="border px-4 py-2">Publish Date</th>
            <th className="border px-4 py-2">Attachments</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
              <td className="border px-4 py-2 font-medium">{blog.title}</td>
              <td className="border px-4 py-2">{blog.author}</td>
              <td className="border px-4 py-2">{blog.status || "draft"}</td>
              <td className="border px-4 py-2">{blog.category || "-"}</td>
              <td className="border px-4 py-2">{blog.tags?.join(", ") || "-"}</td>
              <td className="border px-4 py-2">{blog.featured ? "Yes" : "No"}</td>
              <td className="border px-4 py-2">
                {blog.publishDate ? new Date(blog.publishDate).toLocaleDateString() : "-"}
              </td>
              <td className="border px-4 py-2">
                {blog.attachments?.length ? (
                  <div className="flex space-x-2">
                    {blog.attachments.map((url, idx) =>
                      url.endsWith(".pdf") ? (
                        <a key={idx} href={url} target="_blank" className="text-blue-500 underline">
                          PDF
                        </a>
                      ) : url.endsWith(".mp4") ? (
                        <a key={idx} href={url} target="_blank" className="text-green-500 underline">
                          Video
                        </a>
                      ) : (
                        <img key={idx} src={url} alt="Attachment" className="w-12 h-12 object-cover rounded" />
                      )
                    )}
                  </div>
                ) : (
                  "-"
                )}
              </td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => onEdit(blog)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(blog.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
