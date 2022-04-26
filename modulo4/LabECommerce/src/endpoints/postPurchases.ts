import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


const create = async (
    user_id: string,
    product_id: number,
    quantity: number,
    total_price: number
): Promise<any> => {
    await connection("labecommerce_purchases")
        .insert({
            id: Date.now().toString(),
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price
        }
        )
}


export async function postPurchases(
    req: Request,
    res: Response
): Promise<void> {
    let errorCode = 422
    try {
        if (!req.body.user_id || !req.body.product_id || !req.body.quantity) {
            errorCode = 422;
            throw new Error("Existe um campo vazio ou inválido!");
        }

        const price = await connection("labecommerce_products")
        .select("price")
        .from("labecommerce_products")
        .where("id", req.body.product_id)
        
       
        let total_price = price[0].price * req.body.quantity 

        console.log(total_price)
        console.log(req.body.quantity)
        const createPurchases = await create(req.body.user_id, req.body.product_id, req.body.quantity, total_price);
       
        res.status(200).send({
            message: "Compra realizada com sucesso!", createPurchases
        })
    } catch (error) {
        res.status(500).send(error)
    }
}