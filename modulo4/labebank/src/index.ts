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
    let errorCode = 422
    try {
        
       const { name, cpf, datadenascimento, saldo, transacoes} = req.body
 
       const adduser: Users = {
          
          name,
          cpf,
          datadenascimento: new Date(datadenascimento),
          saldo,
          transacoes
       }
       
       let novadata: number = new Date().getFullYear()
       let idade = novadata - adduser.datadenascimento.getFullYear()
       
       if (idade < 18) {
        errorCode = 404;
        throw new Error("Precisar ter no mínimo 18 anos ");
      }
       users.push(adduser)
       res.status(200).send(users)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
   
    })

    app.get("/users", (req, res) => {
        res.status(200).send(users)
    })