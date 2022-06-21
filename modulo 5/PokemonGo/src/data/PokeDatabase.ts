
import { BaseDatabase } from "./BaseDatabase";


export class PokeDatabase extends BaseDatabase {

  private static TABLE_NAME = "Pokemon_Go";

  public getPoke = async (offset: number) => {
    const pokemons = await BaseDatabase.connection()
      .select("*")
      .from(PokeDatabase.TABLE_NAME)
      .limit(20)
      .offset(offset)

    return pokemons
  }
  public getPokeID = async (row: string) => {

    const pokemon = await BaseDatabase.connection()
      .select("*")
      .from(PokeDatabase.TABLE_NAME)
      .where("row", row)

    return pokemon
  }
  public getPokeName = async (name: string) => {
   
    const pokemon = await BaseDatabase.connection()
      .select("*")
      .from(PokeDatabase.TABLE_NAME)
      .where("name", name)
    
    return pokemon
  }
  public getPokeFilter = async (filter: string) => {
    
    const pokemonfilter = await BaseDatabase.connection()
      .select("*")
      .from(PokeDatabase.TABLE_NAME)
      .where("Name" ,"like", `%${filter}%`)
    
    return pokemonfilter
  }

}