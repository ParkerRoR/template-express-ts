import { Router} from 'express'
import { PostCrud_Controller } from '../controllers/Post/postCrud.controller'

export const Post_Routes = Router()

Post_Routes.get('/posts', PostCrud_Controller.getAll)
Post_Routes.post('/post', PostCrud_Controller.postOne)