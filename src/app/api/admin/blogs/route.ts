import { NextResponse } from "next/server";
import { prisma } from "@/lib/server/prisma";
import type { Blog, Prisma } from "@/lib/generated/prisma";

interface BlogBody {
  title: string;
  slug?: string;
  excerpt?: string;
  content: string;
  image?: string;
  publishDate?: string;
  status?: "draft" | "published";
  category?: string | null;
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

    // Generate base slug
    let baseSlug =
      data.slug ||
      data.title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

    // Ensure slug uniqueness
    let slug = baseSlug;
    let counter = 1;
    while (await prisma.blog.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter++}`;
    }

    const createData: Prisma.BlogCreateInput = {
      title: data.title,
      slug,
      excerpt: data.excerpt ?? null,
      content: data.content,
      image: data.image ?? null,
      publishDate: data.publishDate ? new Date(data.publishDate) : null,
      status: data.status ?? "draft",
      category: data.category ?? null,
      tags: data.tags ?? [],
      featured: data.featured ?? false,
      metaTitle: data.metaTitle ?? null,
      metaDescription: data.metaDescription ?? null,
      keywords: data.keywords ?? [],
      attachments: data.attachments ?? [],
      ...(data.authorId ? { author: { connect: { id: data.authorId } } } : {}),
    };

    const newBlog = await prisma.blog.create({ data: createData });
    return NextResponse.json(newBlog);
  } catch (error) {
    console.error("❌ Failed to create blog:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}

// GET /api/admin/blogs
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search")?.trim();

    let blogs: Blog[];
    let total: number;

    if (search) {
      // Full-text search with ranking
      blogs = await prisma.$queryRaw<Blog[]>`
        SELECT *,
          ts_rank(
            to_tsvector('english',
              coalesce("title", '') || ' ' ||
              coalesce("excerpt", '') || ' ' ||
              coalesce("content", '') || ' ' ||
              coalesce("category", '') || ' ' ||
              array_to_string("tags", ' ') || ' ' ||
              array_to_string("keywords", ' ')
            ),
            plainto_tsquery('english', ${search})
          ) AS rank
        FROM "Blog"
        WHERE to_tsvector('english',
          coalesce("title", '') || ' ' ||
          coalesce("excerpt", '') || ' ' ||
          coalesce("content", '') || ' ' ||
          coalesce("category", '') || ' ' ||
          array_to_string("tags", ' ') || ' ' ||
          array_to_string("keywords", ' ')
        ) @@ plainto_tsquery('english', ${search})
        ORDER BY rank DESC, "createdAt" DESC
        LIMIT ${limit} OFFSET ${(page - 1) * limit};
      `;

      // Count total matches
      const countResult = await prisma.$queryRaw<{ count: bigint }[]>`
        SELECT COUNT(*)::bigint as count FROM "Blog"
        WHERE to_tsvector('english',
          coalesce("title", '') || ' ' ||
          coalesce("excerpt", '') || ' ' ||
          coalesce("content", '') || ' ' ||
          coalesce("category", '') || ' ' ||
          array_to_string("tags", ' ') || ' ' ||
          array_to_string("keywords", ' ')
        ) @@ plainto_tsquery('english', ${search});
      `;

      total = Number(countResult[0]?.count || 0);
    } else {
      // Normal pagination
      total = await prisma.blog.count();
      blogs = await prisma.blog.findMany({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          author: { select: { id: true, name: true, email: true } },
        },
      });

    }

    return NextResponse.json({
      total,
      page,
      limit,
      blogs,
    });
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
