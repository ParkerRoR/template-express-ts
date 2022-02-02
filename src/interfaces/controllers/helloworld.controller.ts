import { Request, Response } from "express";


async function hello(req: Request, res: Response) {
    return res.send({hello:'world'})
}
export const ControllerHello = {
    hello
}