import express from "express";
import { FinishwalkController } from "../controler/finishwalkcontroller";

export const endRouter = express.Router();

const endController = new FinishwalkController();

endRouter.post("/ends", endController.create);
