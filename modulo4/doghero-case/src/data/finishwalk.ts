import { BaseDatabase } from "./BaseDatabase";

export class finishDatabase extends BaseDatabase {

public finish_walk = async (id: string, end: Date) => {
    
    await BaseDatabase.connection()
      .insert({
        id: id,
        end: end
      })
      .into("finish_walk");
  }
  public getduration = async (id: string) => {

    const duration = await BaseDatabase.connection()
      .select("end")
      .from("finish_walk")
      .where("id", id)
console.log(duration)
    return duration
  }
}