import { BaseDatabase } from "./BaseDatabase";


export class PetDatabase extends BaseDatabase {

  private static TABLE_NAME = "Pets";

  public getPetID = async (id: string) => {

    const pet = await BaseDatabase.connection()
      .select("*")
      .from(PetDatabase.TABLE_NAME)
      .where("id", id)

    return pet
  }
  public getPetName = async (name: string) => {

    const pet = await BaseDatabase.connection()
      .select("*")
      .from(PetDatabase.TABLE_NAME)
      .where("name", name)

    return pet
  }


}