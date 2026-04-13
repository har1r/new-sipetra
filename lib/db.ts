import { PrismaClient } from "../generated/prisma";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

interface CustomGlobal {
  prismaGlobal?: ReturnType<typeof prismaClientSingleton>;
}

const globalForPrisma = globalThis as unknown as CustomGlobal;

export const db = globalForPrisma.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaGlobal = db;

export default db;
