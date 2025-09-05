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

    const { currentPassword, newPassword } = await req.json();
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return NextResponse.json({ message: "Incorrect password" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: decoded.id },
      data: { password: hashedPassword },
    });

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Password update error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
