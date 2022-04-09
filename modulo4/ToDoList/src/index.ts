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





//Seria melhot criar da forma acima com a função separada do endpoint ou abaixo? 





app.get("/user/:id", async (req, res) => {
   let errorCode = 422
   try {
      const id = req.params.id;
      const getId = async (id: string): Promise<any> => {
         const result = await connection("TodoListUser")
            .select("id", "name")
            .from("TodoListUser")
            .where({ id: id });

         return result[0];
      }

      const user = await getId(id);
      if (!user) {
         errorCode = 422;
         throw new Error("Id inválido!");
      }
      res.status(200).send({ user });
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

const createTask = async (
   title: string,
   description: string,
   limit_date: Date,
   creator_user_id: string
): Promise<any> => {
   await connection("TodoListTask")
      .insert(
         {
            id: Date.now().toString(),
            title: title,
            description: description,
            limit_date: limit_date,
            creator_user_id: creator_user_id
         })

};

app.post("/task", async (req, res) => {
   let errorCode = 422
   try {
      if (!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_user_id) {
         errorCode = 422;
         throw new Error("Existe um campo vazio ou inválido!");
      }
      const createT = await createTask(req.body.title, req.body.description, req.body.limit_date, req.body.creator_user_id);

      res.status(200).send({
         message: "Criado com sucesso!", createT
      })
   } catch (err: any) {
      res.status(400).send({
         message: err.message,
      });
   }
});

app.get("/task/:id", async (req, res) => {
   let errorCode = 422
   try {
      const id = req.params.id;
      const getId = async (id: string): Promise<any> => {
         const result = await connection("TodoListTask")
         .join("TodoListUser","TodoListTask.creator_user_id","TodoListUser.id" )
            .select("TodoListTask.id", "title", "description", "limit_date", "status", "creator_user_id", "nickname")
            .where({ "TodoListTask.id": id });

         return result[0];
      }

      const task = await getId(id);
      if (!task) {
         errorCode = 422;
         throw new Error("Task inválido!");
      }
      res.status(200).send({ task });
   } catch (err: any) {
      res.status(400).send({
         message: err.message,
      });
   }
});

app.get("/users", async (req, res): Promise<void> =>{
   try {
       const resultado = await connection("TodoListUser")
       .select("id", "nickname")
       res.status(200).send({users: resultado})
   } catch (error:any) {
       res.status(500).send(error.sqlMessage || error.message)
   }
})