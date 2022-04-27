import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function login(req: Request, res: Response){
    try {
        const { email, password} = req.body
        if (!email || !password) {
            res.status(422).send("Insira as informações de 'email' e 'password'.")
        }
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("A senha precisa ter no minimo 6 caracters");
         }
        const userDatabase = new UserDatabase()
        const user = userDatabase.findUserByEmail(email);
       
        if (!user) {
            res.status(409).send("Email não esta cadastrado")
        }
        
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager()
        const passwordCorrect = hashManager.compare(password, (await user).getPassword())
        
        if (!passwordCorrect) {
            res.status(401).send("Email ou senha incorreta!")
        }
        const authenticator = new Authenticator()
        const token = authenticator.GenerateToken({id: (await user).getId()})
        res.status(201).send({message: "Usuário logado" ,token: token})

    } catch (err: any) {
        res.status(400).send({
           message: err.message,
        });
     }
}