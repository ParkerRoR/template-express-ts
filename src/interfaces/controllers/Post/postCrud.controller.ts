import { Request, Response } from 'express'
import { Post_UseCase } from '../../../application/useCases/Post/export'


async function getAll(req: Request, res: Response) {
    const r = await Post_UseCase.getAll()
    res.send(r)
}

async function postOne(req: Request, res:Response){
    const r = await Post_UseCase.postOne(req)

    res.send(r)
}


export const PostCrud_Controller = {
    getAll,
    postOne
}