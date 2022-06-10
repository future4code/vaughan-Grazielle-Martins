import { BaseDatabase } from "./BaseDatabase";

export class startDatabase extends BaseDatabase {

    public start_walk = async (id: string, start: Date) => {
    
        await BaseDatabase.connection()
        .insert({
          id: id,
          start: start,

        })
        .into("start_walk");
    }
    public getduration = async (id: string) => {

      const duration = await BaseDatabase.connection()
        .select("start")
        .from("start_walk")
        .where("id", id)
      return duration
    }
}