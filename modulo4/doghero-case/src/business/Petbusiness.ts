import { Request, Response } from "express";
import { PetDatabase } from "../data/PetDatabase";
import { Pettype } from "../model/Pets";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

const petDB = new PetDatabase();
const authenticator = new TokenGenerator();
const idGenerator = new IdGenerator();

export class PetBusiness {



    createPet = async ( name: string, dogheroid: string
    ) => {
        try {
            if (!name || !dogheroid) {
                throw new Error("Por favor preencha os campos ");
            }
            
            const id = idGenerator.generateId();

            
            const dados: Pettype = {
                id,
                name,
                dogheroid
            }

            await petDB.createDoghero(dados);

            const token = authenticator.generateToken({ id });

            return token;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}