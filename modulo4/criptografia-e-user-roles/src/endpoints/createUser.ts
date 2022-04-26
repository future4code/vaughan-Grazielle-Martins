import { hash } from "bcryptjs";
import { Request, Response } from "express";
import connection from "../data/connection";
import { createUser } from "../model/createUser";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/idGenerator";
import { authenticationData, user } from "../types";
import { HashManager} from "../services/generateHash";


export default async function createUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { email, password, role } = req.body

      if (!email || !password ||!role) {
         res.statusCode = 422
         throw new Error("Preencha os campos: 'email','password' e 'role' ")
      }

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Email should have '@' and should not be ampty");
      }

      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Password should have 6 characters");
      }

      const [user] = await connection('Users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      
      const id: string = generateId()
     
      let hashManager: HashManager = new HashManager()
      const cypherPassword = hashManager.generateHash(password)
      
      const newUser: user = { id, email, password: cypherPassword}
      await createUser(id, newUser.email, newUser.password, role);

      const authenticator: Authenticator = new Authenticator()
      const payload: authenticationData = {
         id: newUser.id,
         role: role
      }
      const token = authenticator.GenerateToken({
         id,
         role: role
       })

      res.status(201).send({ Token: token })

   } catch (err: any) {
      res.status(400).send({
         message: err.message,
      });
   }
};