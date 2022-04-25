import { Request, Response } from "express";
import connection from "../data/connection";
import { createUser } from "../model/createUser";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function createUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos: 'email' e 'password' ")
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

      const newUser: user = { id, email, password }


      await createUser(id, newUser.email, newUser.password);

      const authenticator: Authenticator = new Authenticator()
      const payload: authenticationData = {
         id: newUser.id
      }
      const token = authenticator.GenerateToken(payload)

      res.status(201).send({ Token: token })

   } catch (err: any) {
      res.status(400).send({
         message: err.message,
      });
   }
};