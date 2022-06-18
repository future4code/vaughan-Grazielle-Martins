import { Request, Response } from 'express';
import { StartBusiness} from '../business/startwalkbusiness';


const startBusiness = new StartBusiness()

export class StartwalkController {
    create = async (req: Request, res: Response): Promise<void> =>{

        try {
            
          
            const token = await startBusiness.create();

            res.status(200).send({"Passeio iniciado com sucesso": token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}