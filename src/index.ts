import express, { Express,  } from 'express'
import bodyParser from 'body-parser'
import { User_Routes } from './interfaces/routes/user.routes';
import { Post_Routes } from './interfaces/routes/post.routes';
const PORT = 3333;

const app: Express = express()


app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})




const routes = [
    User_Routes,
    Post_Routes
]
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use('/', ...routes)






