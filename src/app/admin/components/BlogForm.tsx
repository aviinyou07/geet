"use client";

import { useState, useEffect } from "react";
import { Blog } from "../types";

interface BlogFormProps {
  initialData?: Partial<Blog>;
  onSubmit: (data: Partial<Blog>) => Promise<void>;
  onClose: () => void;
}

export default function BlogForm({ initialData, onSubmit, onClose }: BlogFormProps) {
  const [form, setForm] = useState<Partial<Blog>>({
    title: "",
    author: "",
    content: "",
    image: "",
    status: "draft",
    category: "",
    slug: "",
    excerpt: "",
    metaTitle: "",
    metaDescription: "",
    keywords: [],
    featured: false,
    publishDate: "",
    attachments: [],
    tags: [],
  });

  const [imagePreview, setImagePreview] = useState<string>("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingAttachments, setUploadingAttachments] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState<{ id: string; name: string } | null>(null);

  // Fetch current admin info
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await fetch("/api/admin/me");
        const data = await res.json();
        if (data?.id) {
          setCurrentAdmin({ id: data.id, name: data.name });
          updateField("author", data.name);
        }
      } catch (err) {
        console.error("Failed to fetch admin info", err);
      }
    };
    fetchAdmin();
  }, []);

  // Prefill form if editing
  useEffect(() => {
    if (initialData) {
      setForm(prev => ({
        ...prev,
        ...initialData,
        keywords: initialData.keywords || [],
        tags: initialData.tags || [],
        attachments: initialData.attachments || [],
      }));
      setImagePreview(initialData.image || "");
    }
  }, [initialData]);

  // Auto-generate slug from title
  useEffect(() => {
    if (form.title && !initialData?.slug) {
      const generatedSlug = form.title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      updateField("slug", generatedSlug);
    }
  }, [form.title]);

  const updateField = (field: keyof Blog, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (file: File) => {
    setUploadingImage(true);
    const formData = new FormData();
    formData.append("files", file);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.files?.length > 0) {
        updateField("image", data.files[0].url);
        setImagePreview(data.files[0].url);
      }
    } catch {
      alert("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  const removeImage = () => {
    updateField("image", "");
    setImagePreview("");
  };

  const handleAttachmentsUpload = async (files: FileList) => {
    setUploadingAttachments(true);
    const formData = new FormData();
    Array.from(files).forEach(file => formData.append("files", file));

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      const urls = data.files.map((f: any) => f.url);
      updateField("attachments", [...(form.attachments || []), ...urls]);
    } catch {
      alert("Failed to upload attachments");
    } finally {
      setUploadingAttachments(false);
    }
  };

  const removeAttachment = (url: string) => {
    updateField("attachments", (form.attachments || []).filter(u => u !== url));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload: Partial<Blog> = {
      ...form,
      id: initialData?.id,
      author: currentAdmin?.name,
      authorId: currentAdmin?.id,
      keywords: (form.keywords || []).map(k => k.trim()).filter(Boolean),
      tags: (form.tags || []).map(t => t.trim()).filter(Boolean),
    };

    try {
      await onSubmit(payload);
      onClose();
    } catch {
      alert("Failed to save blog");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="text-2xl font-bold">{initialData ? "Edit Blog" : "Add Blog"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 font-bold text-xl">&times;</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <InputField label="Title" value={form.title || ""} onChange={val => updateField("title", val)} required />
            <InputField label="Author" value={form.author || ""} onChange={() => {}} readOnly required />
            <TextareaField label="Short Description" value={form.excerpt || ""} onChange={val => updateField("excerpt", val)} />
            <TextareaField label="Content" value={form.content || ""} onChange={val => updateField("content", val)} required />
            <InputField label="Category" value={form.category || ""} onChange={val => updateField("category", val)} />
            <InputField label="Slug" value={form.slug || ""} onChange={() => {}} readOnly />
            <SelectField label="Status" value={form.status || "draft"} onChange={val => updateField("status", val)} options={["draft", "published"]} />

            {/* Image */}
            <div>
              <label className="block mb-1 font-medium">Main Image</label>
              <input type="file" accept="image/*" onChange={e => e.target.files && handleImageUpload(e.target.files[0])} disabled={uploadingImage} />
              {uploadingImage && <p>Uploading image...</p>}
              {imagePreview && (
                <div className="flex items-center mt-2 space-x-2">
                  <img src={imagePreview} className="w-24 h-24 object-cover rounded" />
                  <button type="button" onClick={removeImage} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
                </div>
              )}
            </div>
          </div>

          {/* More Options */}
          <button type="button" className="text-blue-500 underline mt-2" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Hide More Options" : "Show More Options"}
          </button>

          {showMore && (
            <div className="mt-4 space-y-4 border-t pt-4">
              <InputField label="SEO Title" value={form.metaTitle || ""} onChange={val => updateField("metaTitle", val)} />
              <TextareaField label="SEO Description" value={form.metaDescription || ""} onChange={val => updateField("metaDescription", val)} />
              <InputField label="Keywords (comma separated)" value={(form.keywords || []).join(", ")} onChange={val => updateField("keywords", val.split(",").map(k => k.trim()))} />
              <InputField label="Tags (comma separated)" value={(form.tags || []).join(", ")} onChange={val => updateField("tags", val.split(",").map(t => t.trim()))} />
              <CheckboxField label="Featured" checked={form.featured || false} onChange={val => updateField("featured", val)} />
              <InputField label="Publish Date" type="date" value={form.publishDate || ""} onChange={val => updateField("publishDate", val)} />

              {/* Attachments */}
              <div>
                <label className="block mb-1 font-medium">Attachments</label>
                <input type="file" multiple onChange={e => e.target.files && handleAttachmentsUpload(e.target.files)} disabled={uploadingAttachments} />
                {uploadingAttachments && <p>Uploading attachments...</p>}
                {(form.attachments || []).length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {form.attachments?.map((url, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        {url.endsWith(".pdf") ? "📄" : url.endsWith(".mp4") ? "🎬" : "🖼️"}
                        <a href={url} target="_blank" rel="noopener noreferrer" className="underline">{url.split("/").pop()}</a>
                        <button type="button" onClick={() => removeAttachment(url)} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end space-x-2 mt-6 border-t pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border hover:bg-gray-100" disabled={submitting}>
              Cancel
            </button>
            <button type="submit" className={`px-4 py-2 rounded text-white ${submitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`} disabled={submitting}>
              {submitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* -----------------------
   Reusable Field Components
-------------------------*/
function InputField({ label, value, onChange, required = false, type = "text", readOnly = false }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; type?: string; readOnly?: boolean }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required={required} readOnly={readOnly} />
    </div>
  );
}

function TextareaField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <textarea value={value} onChange={e => onChange(e.target.value)} className="w-full border px-3 py-2 rounded h-20 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)} className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function CheckboxField({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center space-x-2">
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
      <label className="font-medium">{label}</label>
    </div>
  );
}
