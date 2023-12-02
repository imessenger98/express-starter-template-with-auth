import jwt from 'jsonwebtoken'

/**
 * Generates an access token.
 * @param {string} userId - User ID.
 * @param {string} deviceId - Device ID.
 * @return {string} - Generated access token.
 * ! Pending Task
 */
export const generateAccessToken = ({ userId, deviceId = null }) => {
    const payload = {
        userId,
        deviceId,
    }

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    })
    // TODO: store Token In DB
    return accessToken
}

/**
 * Generates a refresh token.
 * @param {string} userId - User ID.
 * @param {string} deviceId - Device ID.
 * @return {string} - Generated refresh token.
 * ! Pending Task
 */
export const generateRefreshToken = ({ userId, deviceId = null }) => {
    const payload = {
        userId,
        deviceId,
    }

    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    })
    // TODO: store Token In DB
    return refreshToken
}
