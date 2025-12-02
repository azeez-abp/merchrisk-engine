import { Sequelize } from "sequelize-typescript";
import { User } from "../models/postgres/User";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  models: [User], // auto-load TS models
  logging: false,
});