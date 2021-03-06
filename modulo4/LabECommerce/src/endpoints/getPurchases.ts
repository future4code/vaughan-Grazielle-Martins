import { Request, Response } from "express"
import { connection } from "../data/connection"



export async function getPurchases(
    req: Request,
    res: Response
): Promise<any> {
    let errorCode = 422
    
    try {
        const id = req.params.user_id
        if (!id) {
            throw new Error(`Não foi possivel achar o is '${id}'`)
        }
        const listProducts = await connection("labecommerce_purchases")
            .from("labecommerce_purchases")
            .join("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
            .select("labecommerce_purchases.product_id")
            .where({ user_id: id })

        res.status(200).send({ Compras: listProducts })
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}