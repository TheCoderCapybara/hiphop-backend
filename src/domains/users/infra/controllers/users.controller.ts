import type { FastifyReply, FastifyRequest } from "fastify"

import { z } from "zod"
import { createUserFactory } from "../../use-cases/factories/create-user.factory"

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  })

  const { name, email, password } = createUserSchema.parse(request.body)

  const createUser = createUserFactory()

  await createUser.execute({ name, email, password })

  return reply.status(201).send("Criação de usuario")
}
