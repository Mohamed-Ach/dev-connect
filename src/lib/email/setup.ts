import nodemailer, { type Transporter } from "nodemailer"


const GOOGLE_EMAIL = "intellysk@gmail.com"
const GOOGLE_PASSWORD = "fwxb awic qqlc koyo"

const transporter: Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_PASSWORD
    }
})

transporter.verify(function (error: Error | null, success: boolean) {
    if (error) {
        console.error(error)
    } else {
        console.log("Server is ready to take our messages")
    }
})

export default transporter