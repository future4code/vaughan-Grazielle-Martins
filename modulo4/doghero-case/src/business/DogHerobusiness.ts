import { Request, Response } from "express";
import { DogHeroDatabase } from "../data/DogHeroDatabase";
import { DogHerotype } from "../model/Doghero";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/tokenGenerator";


const userDB = new DogHeroDatabase();
const authenticator = new TokenGenerator();
const idGenerator = new IdGenerator();

export class DogHeroBusiness {
    createDogHero = async (
        date_schedule: Date,
        latitude: string,
        longitude: string,
        start: Date,
        end: Date
    ) => {
        try {
            if (!date_schedule || !start || !end) {
                throw new Error("Por favor preencha os campos ");
            }
            start = new Date()
            end = new Date()
            const id = idGenerator.generateId();

            let price = 0

            let durationstart = start.getTime()
            
            let durationend = end.getTime()
            let durationinitial = Math.abs(durationstart - durationend)

            durationinitial = (durationinitial / 6000) % 60

            if (durationinitial <= 30) {
                price = 25
            } else {
                price = 35
            }
            let duration = durationinitial.toString()
          


            const dados: DogHerotype = {
                id,
                date_schedule,
                price,
                duration,
                latitude,
                longitude,
                start,
                end
            }
            
            await userDB.createDoghero(dados);
            
            const token = authenticator.generateToken({ id });
          
            return token;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async index(pagina: number, date_schedule?: string) {

        if (!pagina) {
            throw new Error("Número de página inválida.");
        }
        let size = 20
        let offset = size * (pagina - 1)
        const dogherolist = new DogHeroDatabase();

        let doghero = []

        if (date_schedule) {
            doghero = await dogherolist.getDogHeroDate(offset, date_schedule)
        } else {
            doghero = await dogherolist.getDogHero(offset)
        }



        return doghero;

    }
    async searchPokemonID(row: string) {
        // if (!row ) {
        //     throw new Error("Número de ID/Row inválido!");
        // }
        // const pokemonsid = new DogHeroDatabase();

        // const pokemons = await pokemonsid.getPokeID(row)


        // return pokemons;

    }
    async searchPokemonName(name: string) {
        // if (!name) {
        //     throw new Error("Nome inválido!");
        // }
        // const pokemonsname = new DogHeroDatabase();

        // const pokemons = await pokemonsname.getPokeName(name)


        // return pokemons;

    }
    async FilterPokemon(filter: string) {
        // if (!filter ) {
        //     throw new Error("Pesquisa inválida!");
        // }

        // const pokemons = new DogHeroDatabase();

        // const pokemonslistfilter = await pokemons.getPokeFilter(filter)

        // return  pokemonslistfilter;

    }
}