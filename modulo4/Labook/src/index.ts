import { app } from "./controller/app";
import {UserCreateController} from "./controller/UserCreateController"

const userController = new UserCreateController()


app.post('/signup', userController.signup)