import { PrismaClient } from "@/app/generated/prisma";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
};

// this allows us to always have access to a prisma client instance
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['query'],
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma