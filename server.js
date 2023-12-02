/*
 * Author MUHAMMED YAZEEN AN
 * Created on Sun Nov 26 2023
 * Version 1
 */

import express, { json } from 'express'
import { SERVER_MSGS } from './constants.js'

import mainRouter from './routes/routes.js'
import { logger } from './config/logger.js'

const app = express()
const port = 3000

app.use(json())

app.get('/', (_req, res) => {
    res.json({ status: 'active' })
})
app.use('/api', mainRouter)

app.listen(port, () => {
    logger.info({ message: `${SERVER_MSGS.SERVER_RAN_ON_PORT}:${port}` })
})
