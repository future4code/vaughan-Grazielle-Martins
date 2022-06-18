import express from "express";
import {DogHeroController} from "../controler/DogHerocontroller";

export const dogheroRouter = express.Router();

const dogheroController = new DogHeroController();

dogheroRouter.post("/create", dogheroController.createDogHero);
dogheroRouter.get("/index", dogheroController.index );
dogheroRouter.get("/show/:id", dogheroController.show );
