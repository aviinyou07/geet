import 'dotenv/config';
import { prisma } from "@/lib/server/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@admin.com";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  const existingAdmin = await prisma.user.findUnique({ where: { email } });
  if (existingAdmin) {
    console.log("✅ Admin already exists. Seed skipped.");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      name: "Admin User",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log(`✅ Admin user seeded: ${email}`);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
