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

//Exercício 3
//a) Na verdade não, vai retornar o type user que é um array, poderia fazer um map para passar de um em um, trazendo informações específicas 
//b) Questão de otimização

//c )


type user = {
	id: string;
	name: string;
	email: string;
}
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };
