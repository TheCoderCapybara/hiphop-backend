import type { UsersRepositoryInterface } from "../repositories/users-repository.interface"
import { MailProvider } from "../../../shared/providers/email/nodemailer/nodemailerMailProvider"

export class ForgotPassword {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(email: string) {
    console.log(email)

    const mailProvider = new MailProvider()

    await mailProvider.sendMail({
      to: email,
      subject: "Recuperação de senha",
      template: `
      <p>Olá Beltrame</p>
      <p>Clique no link abaixo para recuperar sua senha:</p>
      <a href="http://localhost:3000/reset-password?token=${1234}">Recuperar Senha</a>
      `,
    })

    return email
  }
}
