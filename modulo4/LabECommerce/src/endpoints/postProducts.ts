import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


const create = async (
   name: string,
   price: number,
   image_url: string
): Promise<any> => {
   await connection("labecommerce_products")
      .insert( {
      id: Date.now().toString(),
      name: name,
      price: price,
      image_url: image_url
   }
)}


export async function postProducts(
   req: Request,
   res: Response
): Promise<void> {
      let errorCode = 422
      try {
         if (!req.body.name || !req.body.price || !req.body.image_url) {
            errorCode = 422;
            throw new Error("Existe um campo vazio ou inválido!");
         }
         const createProduct = await create(req.body.name, req.body.price, req.body.image_url);
   
         res.status(200).send({
            message: "Produto criado com sucesso!", createProduct
         })
   } catch (error) {
      res.status(500).send("Internal server error")
   }}