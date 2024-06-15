import type { PageServerLoad } from './$types'
import { client } from '$lib/lucia/prisma'

function isWithinExpiration(tokenExpiresAt: number) {
    return new Date().getTime() < tokenExpiresAt
}


export const load: PageServerLoad = async ({ params }) => {
    const verificationToken: string = params.token

    const token = await client.email_Verification.findUnique({
        where: {
            id: verificationToken,
        },
    })
    if (token) {
        await client.email_Verification.delete({
            where: {
                id: token.id,
            },
        })
    }
    if (!token || !isWithinExpiration(token.expires_at.getTime())) {
        return {
            status: 400,
            response: "Invalid or Expired Token",
            message: "This activation link is invalid or expired. Please request a new one."
        }
    }
    const user = await client.user.findFirst({
        where: {
            email: token.email
        }
    });

    if (!user) {
        return {
            status: 400,
            response: "Invalid or Expired Token",
            message: "This activation link is invalid or expired. Please request a new one."
        }
    }
    await client.user.update({
        where: {
            id: user.id,
        },
        data: {
            emailVerified: true,
        },
    })
    return {
        status: 200,
        response: "Email Verified Successfully",
        message: `Your email has been verified successfully.
                    You'll be redirected to the login page in a few seconds, if you are not redirected
                , click the button below.`
    }
}