import type { PageServerLoad } from '../$types'
import { redirect } from '@sveltejs/kit';


// * get `locals.user` and pass it to the `page` store
export const load: PageServerLoad = async ({ cookies, url }) => {
    const token = url.searchParams.get('token')
    if (!token)
        throw redirect(302, '/login')

    // * Create a Session Cookie:
    cookies.set('session', token, {
        // send cookie for every page
        path: '/',
        // server side only cookie so you can't use `document.cookie`
        httpOnly: true,
        // only requests from same site can send cookies
        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
        sameSite: 'strict',
        // only sent over HTTPS in production
        secure: process.env.NODE_ENV === 'production',
        // set cookie to expire after a month
        maxAge: 60 * 60 * 24 * 30
    })

    throw redirect(302, '/on-boarding')

}