import app from "./app";
import { signup } from "./endpoints/createUser";
import { getAnotherUser } from "./endpoints/getAnotherUser";
import { profile } from "./endpoints/getProfile";
import { getRecipes } from "./endpoints/getRecipes";
import { login } from "./endpoints/login";
import { recipes } from "./endpoints/Recipes";

app.post("/user", signup);

app.post("/login", login);

app.get("/user/profile", profile);

app.post("/recipe", recipes);

app.get("/user/:id", getAnotherUser);

app.get("/recipe/:id", getRecipes);