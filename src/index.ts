import express from "express";
import { rmSync } from "fs";

import { AddressInfo } from "net";
import { users } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//Requisição da mensagem

app.get("/", (req, res) => {
    res.send("Hello from Express")
})

//Requisiçãopara retornar os usuários

app.get("/users", (req, res) => {
  res.status(200).send(users)
})
