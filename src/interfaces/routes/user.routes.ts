import { Router} from 'express'
import { UserCrud_Controller } from '../controllers/User/userCrud.controller'

export const User_Routes = Router()

User_Routes.get('/users', UserCrud_Controller.getAll)
User_Routes.post('/user', UserCrud_Controller.postOne)