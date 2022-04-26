import express from "express";
import { baseUrl } from "./baseUrl";
import { AddressInfo } from "net";
import axios from "axios";
import { connection } from "./connection";
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

//Exercício 2
//a) porque declara uma const com o nome da função que vai ser = async e tbm 
// a utilização do '=>'
//b) 

  const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };
