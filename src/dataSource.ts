import { DataSource } from "typeorm";
import "dotenv/config";
import "reflect-metadata";

const appDataSource = new DataSource({
  type: "postgres",
  url: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [__dirname + "/**/entities/*.{js,ts}"],
  migrations: [__dirname + "/**/migrations/*.{js,ts}"],
});

export default appDataSource;
