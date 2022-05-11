import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../../src/model/User";
import { AuthenticationData } from "../../src/services/tokenGenerator";

export class TokenGeneratorMock {
    private static expiresIn: number = 1200;
  
    public generate = (input: AuthenticationData): string => {
    
      return "token_mockado";
    };
  
    public verify(token: string) {
      return {
          id: "id_mockado",
          role: USER_ROLES.NORMAL
      }
    }
  }
  
  export default new TokenGeneratorMock()