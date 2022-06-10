import { Pettype } from "../model/Pets";
import { BaseDatabase } from "./BaseDatabase";


export class PetDatabase extends BaseDatabase {

  private static TABLE_NAME = "Pets";
  public createDoghero = async (
    pet: Pettype
  ) => {
    await BaseDatabase.connection()
      .insert({
        id: pet.id,
        name: pet.name,
        dogheroid: pet.dogheroid
      })
      .into("Pets");
  }
 
  
}