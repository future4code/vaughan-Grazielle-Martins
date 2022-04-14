import { app } from "./app";
import { getProducts } from "./endpoints/getProducts";
import { getPurchases } from "./endpoints/getPurchases";
import { getUsers } from "./endpoints/getUsers";
import { postProducts } from "./endpoints/postProducts";
import { postPurchases } from "./endpoints/postPurchases";
import { postUsers } from "./endpoints/postUsers";

app.post("/users", postUsers)

app.post("/products", postProducts)

app.post("/purchases", postPurchases)

app.get("/users", getUsers)

app.get("/products", getProducts)

app.get("/users/:user_id/purchases", getPurchases)