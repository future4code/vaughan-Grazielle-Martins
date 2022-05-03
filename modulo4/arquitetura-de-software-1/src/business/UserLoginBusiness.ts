
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";

const userDB = new UserDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();


export class UserLoginBusiness {

     login = async (email:string, password: string) => {

        
        const userFromDB = await userDB.loginUser(email);

        const hashCompare = await hashManager.compare(password, userFromDB.password);

        const accessToken = authenticator.generateToken({ id: userFromDB.id, role: userFromDB.role});

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}

