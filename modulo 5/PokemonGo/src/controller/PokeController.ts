import { Request, Response } from 'express';
import { PokeBusiness } from '../business/PokeBusiness';

const getpokeBusiness = new PokeBusiness()

export class PokeController {
    getallPoke = async (req: Request, res: Response) => {


        try {
            let pagina = Number(req.query.pagina)

            const pokemons = await getpokeBusiness.getPokemons(pagina)

            res.status(200).send({ Pokemons: pokemons });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }
    serachPokeID = async (req: Request, res: Response) => {


        try {
            const row = req.params.row

            const pokemon = await getpokeBusiness.searchPokemonID(row)

            res.status(200).send({ Pokemon: pokemon });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }
}