require('dotenv').config();

export const config = {
  PORT: process.env.PORT!,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  APP_ENV: process.env.APP_ENV,
  SWAGGER_USER: process.env.SWAGGER_USER!,
  SWAGGER_PWD: process.env.SWAGGER_PWD!,
  SWAGGER_BASIC_AUTH_ENABLE: process.env.SWAGGER_BASIC_AUTH_ENABLE === 'true',
  JWT_SECRET: process.env.JWT_SECRET,
  SEND_GRID_KEY: process.env.SEND_GRID_KEY,
};
