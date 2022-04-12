import { app } from "./app";
import { allEndpoints, getAllUsers, getTypeUsers, listUsers, ordenacaoUsers } from "./endpoints/getAllUsers";

app.get("/users", getAllUsers)

app.get("/users/order", ordenacaoUsers)

app.get("/users/list", listUsers)

app.get("/users/all", allEndpoints)

app.get("/users/:type", getTypeUsers)


