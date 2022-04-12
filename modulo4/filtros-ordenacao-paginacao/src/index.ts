import { app } from "./app";
import { getAllUsers, getTypeUsers, listUsers, ordenacaoUsers } from "./endpoints/getAllUsers";

app.get("/users", getAllUsers)

app.get("/users/order", ordenacaoUsers)

app.get("/users/list", listUsers)

app.get("/users/:type", getTypeUsers)


