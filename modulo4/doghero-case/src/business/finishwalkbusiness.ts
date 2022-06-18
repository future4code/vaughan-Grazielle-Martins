import { finishDatabase } from "../data/finishwalk";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

const finishDB = new finishDatabase();
const authenticator = new TokenGenerator();
const idGenerator = new IdGenerator();

export class FinishBusiness {



    create = async ( 
    ) => {
        try {
            const end = new Date()
           
            
            const id = idGenerator.generateId();

           

            await finishDB.finish_walk(id, end);

            const token = authenticator.generateToken({ id });

            return token;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}