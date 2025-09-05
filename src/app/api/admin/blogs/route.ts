import { NextResponse } from "next/server";
import { prisma } from "@/lib/server/prisma";

interface BlogBody {
  title: string;
  slug?: string;
  excerpt?: string;
  content: string;
  image?: string;
  publishDate?: string;
  status?: "draft" | "published";
  category?: string;
  tags?: string[];
  featured?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  attachments?: string[];
  authorId?: string;
}

// CREATE /api/admin/blogs
export async function POST(req: Request) {
  try {
    const data: BlogBody = await req.json();

    if (!data.title || !data.content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const slug =
      data.slug ||
      data.title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

    const createData: any = {
      title: data.title,
      slug,
      excerpt: data.excerpt || "",
      content: data.content,
      image: data.image || "",
      publishDate: data.publishDate ? new Date(data.publishDate) : new Date(),
      status: data.status || "draft",
      category: data.category || "",
      tags: data.tags || [],
      featured: data.featured || false,
      metaTitle: data.metaTitle || "",
      metaDescription: data.metaDescription || "",
      keywords: data.keywords || [],
      attachments: data.attachments || [],
    };

    if (data.authorId) {
      const user = await prisma.user.findUnique({ where: { id: data.authorId } });
      if (user) createData.author = { connect: { id: data.authorId } };
    }

    const newBlog = await prisma.blog.create({ data: createData });
    return NextResponse.json(newBlog);
  } catch (error) {
    console.error("Failed to create blog:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}

// GET /api/admin/blogs
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url || "http://localhost");
    const search = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    console.log("🔍 Search:", search, "Page:", page, "Limit:", limit);

    const where = search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { excerpt: { contains: search, mode: "insensitive" } },
            { content: { contains: search, mode: "insensitive" } },
            { category: { contains: search, mode: "insensitive" } },
            { tags: { has: search } },
            { keywords: { has: search } },
            { author: { is: { name: { contains: search, mode: "insensitive" } } } }

          ],
        }
      : {};

    const total = await prisma.blog.count({ where });

    const blogs = await prisma.blog.findMany({
      where,
      orderBy: { publishDate: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        author: { select: { id: true, name: true, email: true } },
      },
    });

    return NextResponse.json({
      data: blogs.map(b => ({
        ...b,
        author: b.author?.name || "Unknown",
      })),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("❌ Failed to fetch blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
