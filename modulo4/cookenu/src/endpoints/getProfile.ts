import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


export async function profile(req: Request, res: Response){
    try {
        const token = req.headers.authorization as string

        if (!token) {
            res.status(422).send("Este endpoint exige uma autenticação")
        }
        const authenticator = new Authenticator()
        const tokenData = authenticator.getData(token)
        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUser()

        res.status(201).send(user)
    } catch (err: any) {
        res.status(400).send({
           message: err.message,
        });
     }
}