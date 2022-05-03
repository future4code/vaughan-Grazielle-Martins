import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator} from "../services/idGenerator"
import { USER_ROLES } from "../types/user";

const userDB = new UserDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();

export class UserCreateBusiness{
    createUser = async (name: string, email: string, password: string, role: USER_ROLES) => {

        try{

            if(!name || !email || !password || !role){
                throw new Error("Por favor preencha os campos ");
            }

            if(email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }

            if(password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }

            const id = idGenerator.generateId();

            const newhashPassword = await hashManager.hash(password);
            
            await userDB.insertUser({id, email, name, password: newhashPassword, role});
            
            const token = authenticator.generateToken({id, role});
           
            return token;

        }catch(error: any){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }
}
