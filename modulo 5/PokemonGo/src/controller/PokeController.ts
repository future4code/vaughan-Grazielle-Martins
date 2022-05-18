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
    searchPokeID = async (req: Request, res: Response) => {
        
      
        try {
            const row = req.params.row

            const pokemon = await getpokeBusiness.searchPokemonID(row)

            res.status(200).send({ Pokemon: pokemon });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }
    searchPokeName = async (req: Request, res: Response) => {


        try {
           
            const name = req.query.name as string
           
            const pokemon = await getpokeBusiness.searchPokemonName(name)

            res.status(200).send({ Pokemon: pokemon });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }
    filterPoke = async (req: Request, res: Response) => {


        try {
         
            const filter = req.query.filter as string
            
            const filterpokemon = await getpokeBusiness.FilterPokemon(filter)

            res.status(200).send({ Filtro : filterpokemon });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }
}