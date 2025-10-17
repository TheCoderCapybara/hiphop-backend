import type { FastifyInstance } from "fastify"
import { login } from "../controllers/auth.controller"

export function authRoutes(app: FastifyInstance) {
  app.post("/", login)
}
