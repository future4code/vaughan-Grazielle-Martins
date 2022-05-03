import { Request, Response } from "express";
import { UserLoginBusiness } from "../business/UserLoginBusiness";

const userBusiness = new UserLoginBusiness();

export class UserLoginController{
     login = async (req: Request, res: Response): Promise<void> =>{

        try {

            const loginData = {
                email: req.body.email,
                password: req.body.password
            };

           
            const token = await userBusiness.login(loginData.email, loginData.password);

            res.status(200).send({message: "Usuário logado", token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}

