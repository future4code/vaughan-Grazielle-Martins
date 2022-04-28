import { recipes } from "../endpoints/Recipes";
import { Recipe } from "../model/Recipe";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase{

    public async createUser(user: User){
        try {
            await BaseDatabase.connection('User').insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    public async findUserByEmail(email: string): Promise<User>{
        try {
            const user = await BaseDatabase.connection('User').select('*').where({email})
            return user[0] && User.toUserModel(user[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
    public async getUser(): Promise<User[]>{
        try {
            const user = await BaseDatabase.connection('User').select(
                "id",
                "name",
                "email"
                )
            return user
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
    public async getAnother(id: string): Promise<User[]>{
        try {
            const user = await BaseDatabase.connection('User').select(
                "id",
                "name",
                "email"
                ).where({id})
            return user
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
    public async getRecipe(id: string): Promise<Recipe[]>{
        try {
            const user = await BaseDatabase.connection('Recipe').select(
                "id",
                "title",
                "description",
                "data_criacao"
                ).where({id})
            return user
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
    public async createRecipe(recipe: Recipe){
        try {
            
            const recipes = await BaseDatabase.connection('Recipe').insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                data_criacao: new Date()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
}