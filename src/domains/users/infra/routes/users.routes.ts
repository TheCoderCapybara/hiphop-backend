import type { FastifyInstance } from "fastify"
import { createUser } from "../controllers/users.controller"

export async function usersRoutes(app: FastifyInstance) {
  app.get("/", createUser)

  app.put("/", updateUser)

  app.delete("/", deleteUser)
}
