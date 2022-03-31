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
  const getStatus = req.query.completed == 'true'
 
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

app.put("/completed/:id", (req, res) =>  {
 const id = req.params.id
 const editCompleted = arrayToDo.filter((completed) =>{
   return completed.id === Number(id)
 })[0]
 
 editCompleted.completed = !editCompleted.completed

  res.send(editCompleted)
})

app.delete("/todo/:id", (req, res) => {
  const id = Number(req.params.id)
  
  const todosDelete = arrayToDo.filter((todo) => {
    return todo.id === id
  })[0]
  const indice = arrayToDo.indexOf(todosDelete)
  const splice = arrayToDo.splice(indice,1)

  res.send(arrayToDo);
})

app.get("/todo/user/:id", (req, res) => {
  const id = Number(req.params.id)

  const todoUser: any = arrayToDo.filter((todo) => {
      return todo.userId === id
    })

  res.send(todoUser)
})
