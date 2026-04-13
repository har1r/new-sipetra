import { PrismaClient } from "../generated/prisma";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Gunakan 'interface' agar lebih bersih di TypeScript
interface CustomGlobal {
  prismaGlobal?: ReturnType<typeof prismaClientSingleton>;
}

const globalForPrisma = globalThis as unknown as CustomGlobal;

// Ekspor dengan nama 'prisma' (agar sinkron dengan import { prisma } di file lain)
export const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaGlobal = prisma;