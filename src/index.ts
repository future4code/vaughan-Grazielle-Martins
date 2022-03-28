import express from "express";
import { rmSync } from "fs";

import { AddressInfo } from "net";
import { posts, users } from "./data";

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

//Endpoint da mensagem

app.get("/", (req, res) => {
  res.send("Hello from Express")
})

//Endpointpara p/ retornar os usuários

app.get("/users", (req, res) => {
  res.status(200).send(users)
})

//Endpoint  p/ retornar os posts

app.get("/posts", (req, res) => {
  res.status(200).send(posts)
})

//Endpoint para retornar os posts de um usuário

app.get("/user/:userId", (req, res) => {
  const userId = users.map((user)=>{
    return user.id
  })
 
  const post = posts.map((post) => {
    if (Number(userId) === post.userId) {
      return {post[]}
    }
  })
  res.send(post);

})