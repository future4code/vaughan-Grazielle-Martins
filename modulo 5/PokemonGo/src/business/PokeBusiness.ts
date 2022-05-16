import { Request, Response } from "express";
import { PokeDatabase } from "../data/PokeDatabase";


export class PokeBusiness {
    
    async getPokemons() {

        const pokemonslist = new PokeDatabase();
        
        await pokemonslist.getPoke()
       
        return pokemonslist;
       
    }
}