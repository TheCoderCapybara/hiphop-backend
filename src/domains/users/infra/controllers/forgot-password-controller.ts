import type { FastifyRequest, FastifyReply } from "fastify"

import { z } from "zod"
import { makeForgotPassword } from "../../use-cases/factories/make-forgot-password"

export async function forgotPassword(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const Schema = z.object({
    email: z.string().email(),
  })

  const { email } = Schema.parse(request.body)

  const ForgotPassword = makeForgotPassword()

  await ForgotPassword.execute(email)

  return reply.status(200).send({ message: "Email sent" })
}
