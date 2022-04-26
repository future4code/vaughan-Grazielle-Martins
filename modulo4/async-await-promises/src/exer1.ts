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

//Exercício 1
//a) o endpoint ''GET/subscribers''
//b) seria o [] no tipo de retorno na Promise
//c)

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };

  