import fastify from "fastify"

import { env } from "./shared/env/enviroment"
import { appRoutes } from "./shared/routes/app.routes"

const app = fastify()

//exemplo de uma rota GET
app.get("/hello", () => {
  return "Hello World"
})

app.register(appRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP server running!")
  })
