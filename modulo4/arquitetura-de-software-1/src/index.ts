import { app } from "./controller/app";
import { UserAllController } from "./controller/UserAllController";
import {UserCreateController} from "./controller/UserCreateController"
import { UserLoginController } from "./controller/UserLoginController";

const userController = new UserCreateController()
const userLoginController = new UserLoginController()
const userAllController = new UserAllController()

app.post('/signup', userController.signup)

app.post('/login', userLoginController.login)

app.get('/all', userAllController.get)

