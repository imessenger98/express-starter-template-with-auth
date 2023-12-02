import { Router } from 'express'
import { login } from '../controllers/auth/index.js'
const authRouter = Router()

// Authentication routes
authRouter.post('/login', login)

export default authRouter
