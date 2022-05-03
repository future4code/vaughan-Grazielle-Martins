import { Request, Response } from "express";
import { UserAllBusiness } from "../business/UserAllBusiness";

const userBusiness = new UserAllBusiness()

export class UserAllController{
 get = async (req: Request, res: Response) => {

		
        try {

            const token = req.headers.authorization!;
            const users = await userBusiness.get(token);

            res.send(users).status(200);

        } catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        }
    }
}