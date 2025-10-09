import knex, { type Knex } from "knex"

export const config: Knex.Config = {
  client: "pg",
  pool: { min: 1, max: 10 },
  acquireConnectionTimeout: 30 * 1000,
  connection: {
    host: "localhost",
    user: "postgres",
    password: "pecege16",
    database: "db_vsd",
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/shared/database/migrations",
    extension: "ts",
  },
}

export const connection = knex(config)
