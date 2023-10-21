import { createTransport } from 'nodemailer'

const sendVoucher = async (to: string, fullName: string, day: string, thematic: string) => {
  const html = `
<div>
  <h1>Inscrição realizada com sucesso!</h1>

  <p>Prezado(a) Sr.(a) ${fullName.toUpperCase()},</p>
  <p>Sua inscrição para participar do 2° Fórum Tecnológico Interdisciplinar foi realizada com sucesso.</p>
  <p>Dia: ${day}/09/2023</p>
  <p>Temática: ${thematic}</p>
</div>
`

  try {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: "2° Fórum Tecnológico Interdisciplinar - Confirmação de inscrição",
      html
    })

  } catch (e) {
    console.log(e)
  }

}

export default sendVoucher
