import app from "./app";
import { signup } from "./endpoints/createUser";
import { profile } from "./endpoints/getProfile";
import { login } from "./endpoints/login";

app.post("/user", signup);

app.post("/login", login);

app.get("/user/profile", profile);