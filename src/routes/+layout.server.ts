import type { LayoutServerLoad } from './$types'

// * get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async ({ locals }) => {
    return {
        theme: locals.theme,
        user: locals.user
    }
}