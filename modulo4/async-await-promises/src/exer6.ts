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

//Exercício 6
//a) recebe um iterável (como um array) de promessas e, uma vez que todas tenham sido resolvidas, retorna um novo array com os respectivos valores de resolução. 
//b) Porque evita uma queda de perfomace quando uma requisição não é respondida antes de enviar outra
//c)


type user = {
	id: string;
	name: string;
	email: string;
}
const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseUrl}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };