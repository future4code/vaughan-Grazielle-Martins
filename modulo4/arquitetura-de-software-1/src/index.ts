import { app } from "./controller/app";
import {UserCreateController} from "./controller/UserCreateController"
import { UserLoginController } from "./controller/UserLoginController";

const userController = new UserCreateController()
const userLoginController = new UserLoginController()

app.post('/signup', userController.signup)

app.post('/login', userLoginController.login)

