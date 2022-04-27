import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response){
    try {
        const {name, email, password} = req.body
        if (!name || !email || !password) {
            res.status(422).send("Insira as informações de 'name', 'email' e 'password'.")
        }
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("A senha precisa ter no minimo 6 caracters");
         }
        const userDatabase = new UserDatabase()
        const user = userDatabase.findUserByEmail(email);
       
        if (await user) {
            res.status(409).send("Email já cadastrado")
        }
        
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager()
        const haskPassword = hashManager.generateHash(password)

        const newUser = new User(id, name,email,haskPassword)
        
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.GenerateToken({id})
        res.status(201).send({message: "Usuário criado" ,token: token})

    } catch (err: any) {
        res.status(400).send({
           message: err.message,
        });
     }
}