import { Request, Response } from "express";
import connection from "../data/connection";
import { getUserByEmail } from "../model/getUser";
import { Authenticator } from "../services/Authenticator";
import { authenticationData, user } from "../types";

export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.statusCode = 422;
            throw new Error("Preencha os campos: 'email' e 'password' ")
        }
        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email should have '@' and should not be ampty");
        }
        
        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        const user = await getUserByEmail(userData.email);
        if (user.password !== userData.password) {
            throw new Error("Invalid password");
        }
        if (!user || user.password !== password) {
            res.statusCode = 401;
            throw new Error("Credenciais inválidas")
        }


        const authenticator: Authenticator = new Authenticator()
        const payload: authenticationData = {
            id: user.id
        }
        const token = authenticator.GenerateToken(payload)
        res.status(200).send({ Token: token })

    } catch (err: any) {
        res.status(400).send({
          message: err.message,
        });
      }
}
