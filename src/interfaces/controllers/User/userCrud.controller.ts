import { User_UseCase } from "../../../application/useCases/User/export";
import { Request, Response } from 'express'


async function getAll(req: Request, res: Response) {
    const r = await User_UseCase.getAll(req)
    res.send(r)
}

async function postOne(req: Request, res:Response){
    const r = await User_UseCase.postOne(req)

    res.send(r)
}


export const UserCrud_Controller = {
    getAll,
    postOne
}