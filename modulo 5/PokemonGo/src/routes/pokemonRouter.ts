import express from "express";
import { PokeController } from "../controller/PokeController";


export const pokemonRouter = express.Router();

const pokeController = new PokeController();

pokemonRouter.get("/all", pokeController.getallPoke);
pokemonRouter.get("/:row", pokeController.searchPokeID);
pokemonRouter.get("/search/name", pokeController.searchPokeName);