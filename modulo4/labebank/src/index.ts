import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, Users} from "./data";


const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

app.post("/user", (req, res)=>{
   
       const { name, cpf, datadenascimento, saldo, transacoes} = req.body
 
       const adduser: Users = {
          
          name,
          cpf,
          datadenascimento,
          saldo,
          transacoes
       }
       users.push(adduser)
       res.status(200).send(users)
    })