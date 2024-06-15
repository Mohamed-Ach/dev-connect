import { createEmailVerificationToken, sendVerificationEmail } from '$lib/email'
import type { PageServerLoad } from './$types'
import { client } from '$lib/lucia/prisma'
import { Argon2id } from 'oslo/password'
import { fail, redirect } from '@sveltejs/kit'
import { auth } from '$lib/lucia'


export const load: PageServerLoad = async ({ locals }) => {
    // const session = await locals.auth.validate()
    // if (session) {
    //     throw redirect(302, '/posts/browse')
    // }
}


export const actions = {
    default: async ({ request }) => {

        const results = Object.fromEntries(await request.formData())


        console.log(results)

        const hashedPassword = await new Argon2id().hash(results.password.toString())
        const uuid: string = crypto.randomUUID()

        let user = null
        try {
            user = await client.user.create({
                data: {
                    id: uuid,
                    firstName: results.firstName.toString(),
                    lastName: results.lastName.toString(),
                    email: results.email.toString(),
                    password: hashedPassword,
                }
            })
        }
        catch (err) {
            console.log(err)
            return fail(400, { error: "An account with this email already exists! Please login or try with another email." })
        }
        try {
            const verificationToken = await createEmailVerificationToken(uuid, results.email.toString())
            const verificationLink = request.headers.get('origin') + "/email-verification/" + verificationToken
            await sendVerificationEmail(results.email.toString(), verificationLink)

        } catch (err) {
            console.log(err)
            return fail(500, { error: "An Error has Occurred! Please retry again!" })
        }

        return { success: "Your Account has been created successfully! Please check your email for verification link." }
    }
}