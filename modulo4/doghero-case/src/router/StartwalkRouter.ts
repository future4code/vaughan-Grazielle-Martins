import express from "express";
import { StartwalkController } from "../controler/startwalkcontroller";

export const startRouter = express.Router();

const startController = new StartwalkController();

startRouter.post("/starts", startController.create);
