
import { Request, Response } from 'express';
import { PetBusiness } from '../business/Petbusiness';
import { PetInputDTO } from '../model/Pets';

const getpetBusiness = new PetBusiness()

export class PetController {
    createPet = async (req: Request, res: Response): Promise<void> =>{

        try {
            
            const { name,dogheroid} = req.body;
            
            const input: PetInputDTO = {
                name,
                dogheroid
            }

            
            const token = await getpetBusiness.createPet(input.name, input.dogheroid);

            res.status(200).send({"Pet criado com sucesso": token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}