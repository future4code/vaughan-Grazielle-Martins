import { Request, Response } from "express";
import { PokeDatabase } from "../data/PokeDatabase";


export class PokeBusiness {

    async getPokemons(pagina: number) {

        let size = 20
        let offset = size * (pagina - 1)
        const pokemonslist = new PokeDatabase();

        const pokemons = await pokemonslist.getPoke(offset)


        return pokemons;

    }
    async searchPokemonID(row: string) {

        const pokemonsid = new PokeDatabase();

        const pokemons = await pokemonsid.getPokeID(row)


        return pokemons;

    }
    async searchPokemonName(name: string) {
        
        const pokemonsname = new PokeDatabase();

        const pokemons = await pokemonsname.getPokeName(name)


        return pokemons;

    }
}