
import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

export class UserController {


   public async getID(req: Request, res: Response) {
      try {
         const id = req.params.id
        
         const result = await UserBusiness.getIDBusiness(id);
         
         res.status(200).send(result);
      } catch (error: any) {
         res.status(400).send({ error: error.message });
     }
   }

}

export default new UserController()