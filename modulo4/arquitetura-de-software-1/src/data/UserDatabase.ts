import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    insertUser = async (
        user: user
    ) => {
        await this.connection()
            .insert({
                id: user.id,
                email: user.email,
                name: user.name,
                password: user.password,
                role: user.role
            })
            .into("User_Arq");
    }

    loginUser = async (
        email: string
    ): Promise<user> => {
        try {
            const result = await this.connection("User_Arq")
                .select("*")
                .where({ email })
            return {
                id: result[0].id,
                email: result[0].email,
                name: result[0].name,
                password: result[0].password,
                role: result[0].role
            }
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message);
            
        }
    }

}
