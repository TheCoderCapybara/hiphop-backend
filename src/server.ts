import fastify from "fastify"

import { env } from "./shared/env/enviroment"

const app = fastify()

//exemplo de uma rota GET
app.get("/hello", () => {
  return "Hello World"
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP server running!")
  })
