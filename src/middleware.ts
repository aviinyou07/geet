import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/server/auth";

export const config = {
  matcher: ["/admin/:path*"],
  runtime: "nodejs",
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (req.nextUrl.pathname.startsWith("/admin/login")) return NextResponse.next();
  if (!token) return NextResponse.redirect(new URL("/admin/login", req.url));

  const payload = await verifyToken(token);
  if (!payload || payload.role !== "ADMIN") return NextResponse.redirect(new URL("/admin/login", req.url));

  return NextResponse.next();
}
