import app from "./app"
import login from "./endpoints/login"
import createUsers from "./endpoints/createUsers"

app.post('/user/signup', createUsers)
// app.put('/user/edit', editUser)
app.post('/user/login', login)