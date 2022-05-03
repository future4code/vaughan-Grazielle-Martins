import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";

const userDB = new UserDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();


export class UserAllBusiness {
 get = async  (token: string) => {
				
    authenticator.getTokenData(token);
        return await userDB.get();
    }
}

