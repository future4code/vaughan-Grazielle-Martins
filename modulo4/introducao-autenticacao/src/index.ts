import app from "./app"
import login from "./endpoints/login"
import createUsers from "./endpoints/createUsers"
import getUser from "./endpoints/getUser"

app.post('/user/signup', createUsers)
app.get('/user/profile', getUser)
app.post('/user/login', login)