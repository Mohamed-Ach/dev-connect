import type { Actions, PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async () => {
    // ! we only use this endpoint for the api
    // ! and don't need to see the page
    throw redirect(302, '/')
}

export const actions: Actions = {
    default({ request, cookies }) {
        console.log('logout page')
        // * eat the cookie
        cookies.delete('session', { path: '/' })

        // * redirect the user
        throw redirect(302, '/login')
    },
}