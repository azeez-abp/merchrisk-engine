import dotenv from 'dotenv';
dotenv.config();

export const dbConfig = {
  mongoURI: process.env.MONGODB_URI,
  postgresURI: process.env.POSTGRESQL_URI,
  redisURL: process.env.REDIS_URL,
};
