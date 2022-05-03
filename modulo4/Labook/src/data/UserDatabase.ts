import { user } from "../types/User";
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
                password: user.password
            })
            .into("User_Arq");
    }
}