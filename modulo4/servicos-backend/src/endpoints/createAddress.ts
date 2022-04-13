import {Request, Response} from "express";
import { getAddress } from "../services/getAddress";



export const createAddress = async (req: Request, res: Response) =>{
    try {
        const {cep, numero, complemento} = req.body
        const address = await getAddress(cep)
        
        res.send({cep, estado: address?.state, cidade: address?.city, bairro: address?.district, rua: address?.street, numero, complemento})
    } catch (error) {
        if(error instanceof Error){
            res.send({error, message:error.message})
        }else{
            res.send({message: "Unexpected error"})
        }
    }
}