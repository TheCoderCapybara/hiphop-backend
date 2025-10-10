import type { FastifyInstance } from "fastify"

import { usersRoutes } from "../../domains/users/infra/routes/users.routes"

export async function appRoutes(server: FastifyInstance) {
  // server.get("/hello", async (req, res) => {
  //   return res.send("Hello World!")
  // })

  server.register(usersRoutes, { prefix: "/users" })
}
