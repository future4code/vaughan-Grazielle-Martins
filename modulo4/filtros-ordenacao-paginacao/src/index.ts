import { app } from "./app";
import { getAllUsers, getTypeUsers, ordenacaoUsers } from "./endpoints/getAllUsers";

app.get("/users", getAllUsers)

app.get("/users/order", ordenacaoUsers)

app.get("/users/:type", getTypeUsers)


