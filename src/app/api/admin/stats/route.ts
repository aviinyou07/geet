import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/server/prisma";
import { verifyToken } from "@/lib/server/auth";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded || decoded.role !== "ADMIN") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Fetch stats
    const totalBlogs = await prisma.blog.count();
    const publishedBlogs = await prisma.blog.count({ where: { status: "published" } });
    const totalUsers = await prisma.user.count();

    return NextResponse.json({
      totalBlogs,
      publishedBlogs,
      totalUsers,
    });
  } catch (err) {
    console.error("Admin stats error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
