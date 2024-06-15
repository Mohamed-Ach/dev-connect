import type { Actions, PageServerLoad } from './$types'
import { fail, redirect } from "@sveltejs/kit"
import { auth } from "$lib/lucia"

export const load: PageServerLoad = async () => {
    // ! we only use this endpoint for the api
    // ! and don't need to see the page
    throw redirect(302, '/')
}

export const actions: Actions = {
    default: async (event) => {

        if (!event.locals.session) {
            return fail(401);
        }
        await auth.invalidateSession(event.locals.session.id)
        const sessionCookie = auth.createBlankSessionCookie()
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
        redirect(302, "/login")
    }
}