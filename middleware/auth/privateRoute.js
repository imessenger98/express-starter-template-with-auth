/*
 * Author MUHAMMED YAZEEN AN
 * Created on Sat Dec 02 2023
 * Version 1
 */

import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'
import { logger } from '../../config/logger.js'
import { PRIVATE_ROUTE } from '../../constants.js'
/**
 * @description Middleware to protect routes that require authentication.
 *  ! Pending Task
 * @param {object} req - request object.
 * @param {object} res - response object.
 * @param {function} next - next middleware function.
 */
export default async function privateRoute(req, res, next) {
    try {
        const token = extractTokenFromHeader(req.headers.authorization)
        if (!token) {
            logger.info({
                message: 'no token',
            })
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ message: PRIVATE_ROUTE.UNAUTHORIZED })
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        // TODO: 3) Check if user exists and add userData in the req
        // const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) for step 3
        // const user = await getUserFromDatabase(decoded?.userId)
        // if (!user) {
        //     return res.status(401).json({ message: PRIVATE_ROUTE.UNAUTHORIZED })
        // }
        // req.user = user
        next()
    } catch (error) {
        logger.error({
            error: error,
        })
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: PRIVATE_ROUTE.UNAUTHORIZED })
    }
}

// ***************************** Helper  **********************************
/**
 * @description Extracts the token from the authorization header.
 * @param {string} authorizationHeader - Authorization header string.
 * @return {string|null} - Extracted token or null if not present.
 */
function extractTokenFromHeader(authorizationHeader) {
    if (authorizationHeader?.startsWith('Bearer')) {
        return authorizationHeader.split(' ')[1]
    }
    return null
}
