// src/app/api/admin/blogs/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/server/prisma";

// GET single blog
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: params.id },
      include: { author: true },
    });

    if (!blog) return new Response("Not found", { status: 404 });
    return NextResponse.json(blog);
  } catch (err) {
    console.error(err);
    return new Response("Failed to fetch blog", { status: 500 });
  }
}
// UPDATE blog
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const data = await req.json();

  try {
    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.slug && { slug: data.slug }),
        ...(data.content && { content: data.content }),
        ...(data.excerpt && { excerpt: data.excerpt }),
        ...(data.image && { image: data.image }),
        ...(data.publishDate && { publishDate: new Date(data.publishDate) }),
        ...(data.status && { status: data.status }),
        ...(data.category && { category: data.category }),
        ...(data.tags && { tags: data.tags }),
        ...(data.featured !== undefined && { featured: data.featured }),
        ...(data.metaTitle && { metaTitle: data.metaTitle }),
        ...(data.metaDescription && { metaDescription: data.metaDescription }),
        ...(data.keywords && { keywords: data.keywords }),
        ...(data.attachments && { attachments: data.attachments }),
        ...(data.authorId && { author: { connect: { id: data.authorId } } }),
      },
      include: { author: true },
    });
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("❌ Failed to update blog:", error);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

// DELETE blog
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await prisma.blog.delete({ where: { id } });
    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("❌ Failed to delete blog:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
