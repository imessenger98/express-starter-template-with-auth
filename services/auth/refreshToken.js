import jwt from 'jsonwebtoken'
import { generateAccessToken, generateRefreshToken } from './generateToken.js'
import { logger } from '../../config/logger.js'
/**
 * Regenerates a refresh token.
 * @param {string} refreshToken - Current refresh token.
 * @return {string} - Regenerated refresh token.
 * ! Pending Task
 */
export function refreshRefreshToken(refreshToken) {
    try {
        // Verify the existing refresh token
        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
        // TODO: remove the token from DB
        // Generate a new refresh token with the same user and device information
        const newRefreshToken = generateRefreshToken(
            decoded.userId,
            decoded.deviceId
        )

        return newRefreshToken
    } catch (error) {
        logger.error({
            error,
        })
        throw error
    }
}

/**
 * Refreshes an access token using a valid refresh token.
 * @param {string} refreshToken - Current refresh token.
 * @return {string} - New access token.
 * ! Pending Task
 */
export function refreshAccessToken(refreshToken) {
    try {
        console.log(refreshToken, process.env.REFRESH_TOKEN_SECRET)
        // Verify the existing refresh token
        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
        // TODO: remove the token from DB
        // Generate a new refresh token with the same user and device information
        const newAccessToken = generateAccessToken(
            decoded.userId,
            decoded.deviceId
        )

        return newAccessToken
    } catch (error) {
        logger.error({
            error,
        })
        throw error
    }
}
