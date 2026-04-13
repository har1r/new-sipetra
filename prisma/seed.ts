import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: { email: "admin@sipetra.com" },
    update: {},
    create: {
      email: "admin@sipetra.com",
      name: "Super Admin",
      password: hashedPassword,
      phoneNumber: "08123456789",
      role: "admin",
    },
  });
  console.log("Seed successful: User admin@sipetra.com created.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
