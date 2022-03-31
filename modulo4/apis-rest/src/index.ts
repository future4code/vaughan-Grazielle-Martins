import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


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

// a) Se usa o método GET para pegar todos os usuários
//b) Poderia ser indicada pelo id, name

type Users = {
   id: number,
   name: string,
   email: string,
   type: TYPE,
   age: number

}

enum TYPE {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

let users: Users[] = [
   {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: TYPE.ADMIN,
      age: 12
   },
   {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: TYPE.NORMAL,
      age: 36
   },
   {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: TYPE.NORMAL,
      age: 21
   },
   {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: TYPE.NORMAL,
      age: 17
   },
   {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: TYPE.ADMIN,
      age: 17
   },
   {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: TYPE.ADMIN,
      age: 60
   }
]

app.get("/users", (req, res) => {
   let errorCode = 400

   if (req) {
      try {
         const typeUser: string = req.query.type as string
         const types = users.filter((type) => {
            return type.type === typeUser
         });
   
         res.status(200).send(types)
      } catch (error: any) {
         res.status(errorCode).send({ message: error.message })
      }

   } else {
      res.status(200).send(users)
   }

})

//A) Pelo filtro, filtrei os types e peguei só os que estavam iguais à requisição.
//B) Tinha utilizado o ENUM e defini os tipos e depois dei como o valor de type o ENUM