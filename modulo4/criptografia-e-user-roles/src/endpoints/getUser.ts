import { Request, Response } from "express";
import {Authenticator} from "../services/Authenticator";
import { getUserByID } from "../model/getId";

export default async function getUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const token = req.headers.authorization as string;

        const authenticator: Authenticator = new Authenticator()


        const authenticationData = authenticator.getData(token);
        if (authenticationData.role !== "normal") {
            throw new Error("Only a normal user can access this funcionality");
          }
        const user = await getUserByID(authenticationData.id);

        res.status(200).send({ Id: user.id , Email: user.email, Role: authenticationData.role })

    } catch (err: any) {
        res.status(400).send({
          message: err.message,
        });
      }
}