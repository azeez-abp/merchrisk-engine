import dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  env: process.env.NODE_ENV,
};

console.log('Environment Config:', envConfig);
