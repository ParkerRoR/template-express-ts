import express, {Express} from 'express'
import { routesHello } from './interfaces/routes/helloworld.route';
const PORT = 3333;

const app : Express = express()

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})


const routes = [
    routesHello
]
app.use('/', ...routes)






