import express from "express";
import userController from "../controller/UserController";

export const userRouter = express.Router();

userRouter.get("/profile/:id", userController.getID);
