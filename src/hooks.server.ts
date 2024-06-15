import { redirect, type Handle } from '@sveltejs/kit'
import { auth } from "$lib/lucia"

export const handle: Handle = async ({ event, resolve }) => {

    const theme: string = event.cookies.get('theme') || 'light'

    // ** Pass the theme to all pages using the context
    event.locals.theme = theme

    // ** verify if the user is authenticated
    const sessionId = event.cookies.get(auth.sessionCookieName)

    if (!sessionId && event.url.pathname.startsWith("/posts")) {
        throw redirect(302, "/login")
    }
    if (!sessionId && event.url.pathname.startsWith("/projects")) {
        throw redirect(302, "/login")
    }
    if (!sessionId && event.url.pathname.startsWith("/discover")) {
        throw redirect(302, "/login")
    }
    if (!sessionId && event.url.pathname.startsWith("/profile")) {
        throw redirect(302, "/login")
    }
    if (!sessionId && event.url.pathname.startsWith("/settings")) {
        throw redirect(302, "/login")
    }
    if (!sessionId && event.url.pathname.startsWith("/chat")) {
        throw redirect(302, "/login")
    }
    if (!sessionId) {
        event.locals.user = null
        event.locals.session = null
        return await resolve(event)
    }

    const { session, user } = await auth.validateSession(sessionId)
    if (session && session.fresh) {
        const sessionCookie = auth.createSessionCookie(session.id)
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        })
        event.locals.session = session
        event.locals.user = user
    }
    if (session) {
        event.locals.session = session
        event.locals.user = user
    }

    if (session && user && event.url.pathname.startsWith("/login")) {
        throw redirect(302, "/posts/browse")
    }
    if (session && user && event.url.pathname.startsWith("/register")) {
        throw redirect(302, "/posts/browse")
    }

    if (!session) {
        const sessionCookie = auth.createBlankSessionCookie()
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        })
    }
    return await resolve(event)
}
