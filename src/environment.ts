import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  production: false,
  API_KEY: process.env['API_KEY'],
};
