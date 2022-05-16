
import { BaseDatabase } from "./BaseDatabase";


export class PokeDatabase extends BaseDatabase {

  private static TABLE_NAME = "Pokemon_Go";

 public  getPoke = async () => {
    const pokemons = await BaseDatabase.connection()
    .select("*")
    .from(PokeDatabase.TABLE_NAME)
    
    return pokemons
  }

}