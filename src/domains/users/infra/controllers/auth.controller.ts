import type { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"
import { makeLogin } from "../../use-cases/factories/make-login"

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const authSchema = z.object({
    email: z.string(),
    password: z.string(),
  })

  const { email, password } = authSchema.parse(request.body)

  const auth = makeLogin()

  const data = await auth.execute({ email, password })

  console.log(data)

  return reply.status(200).send(data)
}
