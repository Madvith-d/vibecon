// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // Allow global `prisma` to persist across hot-reloads in development
  var prisma: PrismaClient | undefined;
}

// Create a singleton Prisma Client
const prisma = global.prisma || new PrismaClient();

// In development, attach to global to prevent multiple instances during hot-reload
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;