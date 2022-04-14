import { Request, Response } from "express"
import { connection } from "../data/connection"



export async function getProducts(
    req: Request,
    res: Response
): Promise<any> {
    let errorCode = 422
    try {
        const listProducts = await connection("labecommerce_products")
        .select("*")
        .from("labecommerce_products")
        res.status(200).send({users: listProducts})
    }catch (error) {
        res.status(500).send("Internal server error")
    }
}