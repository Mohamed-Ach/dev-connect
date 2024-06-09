import { redirect, type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {

    const theme: string = event.cookies.get('theme') || 'light';

    // ** Pass the theme to all pages using the context
    event.locals.theme = theme;

    // ** verify if the user is authenticated


    return await resolve(event)
}