import { Request, Response } from "express";
import { PetDatabase } from "../data/PetDatabase";


export class PetBusiness {

    // async getPokemons(pagina: number) {

    //     if (!pagina || pagina > 83) {
    //         throw new Error("Número de página inválida.");
    //     }
    //     let size = 20
    //     let offset = size * (pagina - 1)
    //     const pokemonslist = new PokeDatabase();

    //     const pokemons = await pokemonslist.getPoke(offset)


    //     return pokemons;

    // }
    // async searchPokemonID(row: string ) {
    //     if (!row ) {
    //         throw new Error("Número de ID/Row inválido!");
    //     }
    //     const pokemonsid = new PokeDatabase();

    //     const pokemons = await pokemonsid.getPokeID(row)


    //     return pokemons;

    // }
    // async searchPokemonName(name: string) {
    //     if (!name) {
    //         throw new Error("Nome inválido!");
    //     }
    //     const pokemonsname = new PokeDatabase();

    //     const pokemons = await pokemonsname.getPokeName(name)


    //     return pokemons;

    // }
    // async FilterPokemon(filter: string) {
    //     if (!filter ) {
    //         throw new Error("Pesquisa inválida!");
    //     }

    //     const pokemons = new PokeDatabase();

    //     const pokemonslistfilter = await pokemons.getPokeFilter(filter)

    //     return  pokemonslistfilter;

    // }
}