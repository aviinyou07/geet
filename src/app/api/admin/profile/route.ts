import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/server/prisma";
import { verifyToken } from "@/lib/server/auth";
import bcrypt from "bcryptjs";

export async function PUT(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const decoded = await verifyToken(token);
    if (!decoded || decoded.role !== "ADMIN")
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { name, email, currentPassword } = body;

    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return NextResponse.json({ message: "Incorrect password" }, { status: 400 });

    const updatedUser = await prisma.user.update({
      where: { id: decoded.id },
      data: { name, email },
    });

    return NextResponse.json({
      message: "Profile updated successfully",
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } catch (err) {
    console.error("Profile update error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
