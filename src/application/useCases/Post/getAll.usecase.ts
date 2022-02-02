import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export async function getAll() {
    const r = await prisma.post.findMany({
        include: {
            author: true
        }
    })
    return r
}