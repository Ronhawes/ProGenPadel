import { PrismaClient } from '../src/generated/prisma' // or '@/generated/prisma' if alias is set

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
