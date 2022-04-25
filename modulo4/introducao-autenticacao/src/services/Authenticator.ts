import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

export class Authenticator {
    GenerateToken = (payload: authenticationData) => {
        return jwt.sign(
            payload,
            `${process.env.JWT_SECRET_KEY}` as string,
            {
                expiresIn: "20min"
            }
        )
    }

    GetTokenData = (token: string)=> {
        try {
            const tokenData = jwt.verify(
                token, process.env.JWT_KEY as string
            ) as authenticationData
            return tokenData;
        } catch (err) {
            console.log(err)
            return null
        }
    }
}