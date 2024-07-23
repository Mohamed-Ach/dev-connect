import { fail, redirect, type Actions } from "@sveltejs/kit"
import { client } from "$lib/lucia/prisma"
import { Argon2id } from "oslo/password"
import { auth } from "$lib/lucia"



export const actions: Actions = {
    default: async ({ request, cookies, url }) => {
        const { email, password } = Object.fromEntries(await request.formData()) as Record<string, string>
        const redirectUrl = url.searchParams.get("redirect") || ""

        const user = await client.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            return fail(400, { error: "Incorrect username or password" })
        }

        const validPassword = await new Argon2id().verify(user.password, password);
        if (!validPassword) {
            return fail(400, { error: "Incorrect username or password" })
        }

        if (!user.emailVerified) {
            return fail(400, { error: "Your Email is not activated yet! Please check your inbox" })
        }

        const session = await auth.createSession(user.id, [])
        const sessionCookie = auth.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        })


        if (!user.onBoarded) {
            return redirect(302, "/on-boarding")
        }
        else {
            redirect(302, redirectUrl ? "/" + redirectUrl.slice(1) : "/posts/browse")
        }
    }
}