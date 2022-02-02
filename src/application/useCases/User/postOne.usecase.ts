import { PrismaClient, User } from '@prisma/client'
import { Request } from 'express'

const prisma = new PrismaClient()

export async function postOne(req: Request) {
    try {
        const payload: User = req.body

        const res = await prisma.user.create({
            data: payload
        })

        return res
    } catch (e) {
        console.log(e)
        throw e
    }
}