import { Router } from 'express'
import { ControllerHello } from '../controllers/helloworld.controller'

export let routesHello = Router()


routesHello.get('/', ControllerHello.hello)