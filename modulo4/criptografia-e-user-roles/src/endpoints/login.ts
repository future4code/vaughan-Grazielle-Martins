import { compare } from "bcryptjs";
import { Request, Response } from "express";
import connection from "../data/connection";
import { getUserByEmail } from "../model/getUser";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/generateHash";
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
        
        if (!user || user.password !== password) {
            res.statusCode = 401;
            throw new Error("Credenciais inválidas")
        }
       
        const compareResult = await compare(
            userData.password,
            user.password
          );
      
          if (!compareResult) {
            throw new Error("Invalid password");
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