import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

export class Authenticator {
    static getData(token: string) {
        throw new Error("Method not implemented.");
    }
    GenerateToken = (payload: authenticationData) => {
        return jwt.sign(
            payload,
            `${process.env.JWT_SECRET_KEY}` as string,
            {
                expiresIn: "20min"
            }
        )
    }



    getData = (token: string): authenticationData => {
        const payload = jwt.verify(token,`${process.env.JWT_SECRET_KEY}`as string) as any;
        const result = {
            id: payload.id,
        };
        return result;
    };
}