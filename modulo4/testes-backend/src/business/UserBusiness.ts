import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole } from "../model/User";
import userDatabase, { UserDatabase } from "../data/UserDatabase";
import hashGenerator, { HashGenerator } from "../services/hashGenerator";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, { TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {
   constructor(
      private userDatabase: UserDatabase,
      private idGenerator:IdGenerator,
      private tokenGenerator: TokenGenerator,
      private hashGenerator: HashGenerator

   ){}

   public async getIDBusiness(id: string) {

      try {
        
         const getuser = await userDatabase.getUserById(id);

         if (!getuser) {
            throw new CustomError(401, "Usuário inválido");
         }


         return { getuser};
      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
}

export default UserBusiness;