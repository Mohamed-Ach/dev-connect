import { constructHtml } from '$lib/email/body'
import { client } from '$lib/lucia/prisma'
import transporter from '$lib/email/setup'

const GOOGLE_EMAIL = "intellysk@gmail.com"


export async function createEmailVerificationToken(userId: string, email: string): Promise<string> {
    await client.email_Verification.deleteMany({
        where: {
            user_id: userId,
        },
    })
    const tokenId = crypto.randomUUID()
    await client.email_Verification.create({
        data: {
            id: tokenId,
            user_id: userId,
            email,
            expires_at: new Date(Date.now() + 2 * 60 * 60 * 1000),
        },
    })
    return tokenId
}

export async function sendVerificationEmail(email: string, link: string) {

    const message = {
        from: GOOGLE_EMAIL,
        to: email,
        bcc: "otaku2015zero@gmail.com",
        subject: "Email Verification",
        text: "",
        html: constructHtml(link),
    }

    const sendEmail = async (message: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            transporter.sendMail(message, (err, info) => {
                if (err) {
                    console.error(err)
                    reject(err)
                } else {
                    resolve(info)
                }
            })
        })
    }

    await sendEmail(message)
}