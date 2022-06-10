import { DogHerotype } from "../model/Doghero";
import { BaseDatabase } from "./BaseDatabase";


export class DogHeroDatabase extends BaseDatabase {

  private static TABLE_NAME = "DogHero";
  public createDoghero = async (
    doghero: DogHerotype
  ) => {
    await BaseDatabase.connection()
      .insert({
        id: doghero.id,
        date_schedule: doghero.date_schedule,
        price: doghero.price,
        duration: doghero.duration,
        latitude: doghero.latitude,
        longitude: doghero.longitude,
        start: doghero.start,
        end: doghero.end
      })
      .into("DogHero");
  }
  public getDogHero = async (offset: number) => {
    const passeios = await BaseDatabase.connection()
      .select("*")
      .from(DogHeroDatabase.TABLE_NAME)
      .limit(20)
      .offset(offset)

    return passeios
  }

  public getDogHeroDate = async (offset: number, date_schedule: string) => {

    const datefilter = await BaseDatabase.connection()
      .select("*")
      .from(DogHeroDatabase.TABLE_NAME)
      .limit(20)
      .offset(offset)
      .where("date_schedule", ">=", `${date_schedule}`)

    return datefilter
  }
  public getPetID = async (id: string) => {

    const pet = await BaseDatabase.connection()
      .select("duration")
      .from(DogHeroDatabase.TABLE_NAME)
      .where("id", id)

    return pet
  }


}