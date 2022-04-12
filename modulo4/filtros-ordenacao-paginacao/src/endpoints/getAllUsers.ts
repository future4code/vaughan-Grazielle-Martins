import { Request, Response } from "express"
import { connection } from "../data/connection"
import selectAllUsers from "../data/migrations"

//Exercicio 1 - a)
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.query
        
        if (!name) {
            throw new Error(`Não foi possivel achar o titulo '${name}'`)
        }
        const filtraNome = await connection("aula48_exercicio")
            .select("*")
            .where("name", "like", `%${name}%`)
        res.status(200).send(filtraNome)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}


//Exercicio 1 - b)

export const getTypeUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { type } = req.params
        
        if (!type) {
            throw new Error(`Não foi possivel achar o tipo '${type}'`)
        }
        const filtraType = await connection("aula48_exercicio")
            .select("*")
            .where("type", "like", `%${type}%`)
        res.status(200).send(filtraType)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}

//Exercicio 2 - a)

export const ordenacaoUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name} = req.query
        let ordernar = req.query.ordenacao as string
        if (ordernar.toUpperCase() !== 'ASC' && ordernar.toUpperCase() !== 'DESC') {
            ordernar = 'ASC'
        }
        if (!ordernar) {
            const result = await connection("aula48_exercicio")
            .select("*")
            .orderBy('email', `${ordernar}`)

        }
        const result = await connection("aula48_exercicio")
            .select("*")
            .orderBy('name', `${ordernar}`)
            .orderBy('type', `${ordernar}`)
            


        res.status(200).send(result)
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}
