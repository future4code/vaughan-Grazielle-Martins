import express from "express";

import { AddressInfo } from "net";
import { arrayToDo } from "./data";

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

app.get("/ping",(req, res) =>{
    res.send("Pong! 🏓")
})

app.get("/completed", (req, res) =>{
  const getStatus = Boolean(req.query.completed)
 
    const filterTodo = arrayToDo.filter((todo)=>{
       return todo.completed === getStatus
    })
    
    res.send(filterTodo)  
})

app.post("/todo", (req, res) =>  {

  const bodyDoTodo = req.body

 arrayToDo.push(bodyDoTodo)

  res.send(arrayToDo)
})

app.post("/completed/:id", (req, res) =>  {
 const id = req.params.id
  const bodyDoTodo = req.body.completed

  const novoCompleted = {
    id: id,
    completed: bodyDoTodo
  }

  res.send(novoCompleted)
})

app.delete("/todo/:userId", (req, res) => {
  const userId = Number(req.params.userId)

  const todosUpdated = arrayToDo.map((todo) => {
    if (todo.id === userId) {
      return { ...todo, arrayToDo: [] }
  } else {
      return todo
  }
  })

  res.send(todosUpdated);
})

app.get("/todo/user/:id", (req, res) => {
  const id = Number(req.params.id)

  const todosUpdated = arrayToDo.map((todo) => {
    todo.id === id
  })

  res.send(todosUpdated);
})