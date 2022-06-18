import express from "express";
import { PetController } from "../controler/Petscontroller";

export const petRouter = express.Router();

const petController = new PetController();

petRouter.post("/create", petController.createPet);
