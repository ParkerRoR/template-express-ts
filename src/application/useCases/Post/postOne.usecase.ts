import { Post, PrismaClient } from "@prisma/client";
import { Request } from "express";


const prisma = new PrismaClient()

export async function postOne(req: Request) {
    const payload: Post = req.body
    const r = await prisma.post.create({
        data: payload
    })
    return r
}