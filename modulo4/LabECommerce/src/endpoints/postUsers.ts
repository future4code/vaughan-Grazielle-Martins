import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


const create = async (
   name: string,
   email: string,
   password: string
): Promise<any> => {
   await connection("labecommerce_users")
      .insert( {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password
   }
)}


export async function postUsers(
   req: Request,
   res: Response
): Promise<void> {
      let errorCode = 422
      try {
         if (!req.body.name || !req.body.email || !req.body.password) {
            errorCode = 422;
            throw new Error("Existe um campo vazio ou inválido!");
         }
         const createUser = await create(req.body.name, req.body.email, req.body.password);
   
         res.status(200).send({
            message: "Criado com sucesso!", createUser
         })
   } catch (error) {
      res.status(500).send("Internal server error")
   }}
