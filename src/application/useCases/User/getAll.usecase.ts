import { PrismaClient } from '@prisma/client'
import { Request } from 'express'

const prisma = new PrismaClient()

export async function getAll(req: Request) {
    try {
        const res = await prisma.user.findMany({
            include:{
                posts:true
            }
        })
        return res
    } catch (e) {
        console.log(e)
        throw e
    }
}