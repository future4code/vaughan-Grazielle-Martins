import { Request, Response } from 'express';
import { PokeBusiness } from '../business/PokeBusiness';

const getpokeBusiness = new PokeBusiness()

export class PokeController {
    getPoke = async (req: Request, res: Response) => {


        try {
           
            const pokemons = await getpokeBusiness.getPokemons()
          
            res.status(200).send({ Pokemons: pokemons });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}