# express-starter-template-with-auth

## Description

This project implements a basic Express server with added routes, middleware, logger, and a basic authentication flow.

## Features

- **Express Server**: A basic Express server has been added to the project.

- **Middleware for Authorization**: Middleware has been implemented for routes that require authorization. Check out `middleware/privateRoute.js` for more details.

- **Helper Functions for Token Generation**: The project includes helper functions to generate refresh tokens and access tokens. These can be found in `services/auth/generateToken.js`.

- **Helper Functions for Token Refresh**: Additionally, there are helper functions to regenerate refresh tokens and access tokens. These can be found in `services/auth/refreshToken.js`.


## Usage

1. Install dependencies:

   ```bash
   npm install

2. Install dependencies:
   ```bash
   npm start
