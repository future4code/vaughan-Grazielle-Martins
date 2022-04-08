import express, { Express } from "express";
import { connection } from "./connection";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";


const app: Express = express();
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

const create = async (
   name: string,
   nickname: string,
   email: string
): Promise<any> => {
   await connection("TodoListUser")
      .insert(
         {
            id: Date.now().toString(),
            name: name,
            nickname: nickname,
            email: email
         })

};

app.post("/user", async (req, res) => {
   let errorCode = 422
   try {
      if (!req.body.name || !req.body.nickname || !req.body.email) {
         errorCode = 422;
             throw new Error("Existe um campo vazio ou inválido!");
     }
      const createUser = await create(req.body.name, req.body.nickname, req.body.email);
     
      res.status(200).send({
         message: "Criado com sucesso!", createUser
      })
   } catch (err: any) {
      res.status(400).send({
         message: err.message,
      });
   }
});
 

//Seria melhot criar da forma acima ou abaixo? 


app.get("/user/:id", async (req, res) => {
   let errorCode = 422
   try {
      const id = req.params.id;
      const getId = async (id: string): Promise<any> => {
         const result = await connection("TodoListUser")
            .select("id", "name")
            .from("TodoListUser")
            .where({ id: id});

         return result[0];
      }
      
      const user = await getId(id);
      if (!user) {
         errorCode = 422;
             throw new Error("Id inválido!");
     }
      res.status(200).send({user});
   } catch (err: any) {
      res.status(400).send({
         message: err.message,
      });
   }
});
const updateUser = async (id: string, name: string, nickname: string): Promise<any> => {
   
   await connection("TodoListUser")
       .update({
          id: id,
           name: name,
           nickname: nickname
       })
       .where("id", id);
};

app.put("/user/edit/:id", async (req, res) => {
   let errorCode = 422
   try {
      const id = req.params.id
      if (req.body.name === "") {
         errorCode = 422;
             throw new Error("Name inválido!");
     }
      if (req.body.nickname === "") {
         errorCode = 422;
             throw new Error("Nickname inválido!");
     }
       const edituser = await updateUser(req.params.id, req.body.name, req.body.nickname);
       
       
       res.status(200).send({
           message: "Editado com sucesso!", edituser
         })
   } catch (err: any) {
       res.status(400).send({
           message: err.message,
       });
   }
});


