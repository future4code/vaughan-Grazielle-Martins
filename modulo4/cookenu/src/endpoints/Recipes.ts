import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export async function recipes(req: Request, res: Response){
    try {
        const token = req.headers.authorization as string

        if (!token) {
            res.status(422).send("Este endpoint exige uma autenticação")
        }
        const {title, description} = req.body
        if (!title || !description) {
            res.status(422).send("Insira as informações de 'title' e 'description'.")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getData(token)
        const recipeDatabase = new UserDatabase()

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();
   
        const newRecipe = new Recipe(id, title, description)
        
        await recipeDatabase.createRecipe(newRecipe)

        res.status(201).send({Title: title,Description:  description})
    } catch (err: any) {
        res.status(400).send({
           message: err.message,
        });
     }
}