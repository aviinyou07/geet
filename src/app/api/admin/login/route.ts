import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/server/prisma";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/server/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password }: { email: string; password: string } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
    }

    const token = await signToken({ id: user.id, role: user.role });

    const res = NextResponse.json({ success: true, message: "Login successful" });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
