import { Request, Response } from "express";
import { startDatabase } from "../data/startwalk";
import { Pettype } from "../model/Pets";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

const startDB = new startDatabase();
const authenticator = new TokenGenerator();
const idGenerator = new IdGenerator();

export class StartBusiness {



    create = async ( 
    ) => {
        try {
            const start = new Date()
           
            
            const id = idGenerator.generateId();

           

            await startDB.start_walk(id, start);

            const token = authenticator.generateToken({ id });

            return token;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}