import { Request, Response } from 'express';
import { FinishBusiness } from '../business/finishwalkbusiness';


const finishBusiness = new FinishBusiness()

export class FinishwalkController {
    create = async (req: Request, res: Response): Promise<void> =>{

        try {
         
            const token = await finishBusiness.create();

            res.status(200).send({"Passeio finalizado com sucesso": token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}