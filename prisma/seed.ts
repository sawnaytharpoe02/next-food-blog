import "dotenv/config";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const email = "admin@example.com";
  const passwordHash = await bcrypt.hash("Admin@123456", 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      name: "Admin",
      email,
      password: passwordHash,
      role: "ADMIN",
    },
  });

  // optional: some categories and tags
  await prisma.category.upsert({
    where: { name: "General" },
    update: {},
    create: { name: "General" },
  });
  await prisma.tag.upsert({
    where: { name: "Announcement" },
    update: {},
    create: { name: "Announcement" },
  });

  console.log("Seed complete.");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
