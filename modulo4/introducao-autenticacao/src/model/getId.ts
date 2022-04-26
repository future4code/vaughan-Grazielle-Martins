import connection from "../data/connection";
const userTableName = "Users";
export const getUserByID = async(id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id });
 
    return result[0];
   }