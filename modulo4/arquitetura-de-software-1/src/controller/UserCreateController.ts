
import { Request, Response } from 'express';
import { UserCreateBusiness } from '../business/UserCreateBusiness';

const userBusiness = new UserCreateBusiness();
export class UserCreateController {
    signup = async (req: Request, res: Response) => {


        try {
            const input = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }

            
            const token = await userBusiness.createUser(input.name, input.email, input.password, input.role);
            
            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}
