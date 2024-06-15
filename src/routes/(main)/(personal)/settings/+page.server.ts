import type { PageServerLoad, Actions } from './$types';
import { client } from '$lib/lucia/prisma'
import { fail } from '@sveltejs/kit';

async function getUserData(id: string) {
    return await client.user.findUnique({
        where: {
            id: id
        },
        select: {
            firstName: true,
            lastName: true,
            email: true,
            bio: true,
            title: true,
            programmingLang: true,
            techStack: true,
            intrests: true,
            avatar: true,
            sex: true,
            createAt: true,
        }
    })
}

export const load: PageServerLoad = (async ({ locals }) => {
    const id = locals.user?.id || ""
    return {
        user: locals.user,
        userData: await getUserData(id)
    }
})


export const actions: Actions = {
    default: async ({ request, locals }) => {
        const results = Object.fromEntries(await request.formData())
        try {
            await client.user.update({
                where: {
                    id: locals.user?.id
                },
                data: {
                    firstName: results.firstName.toString(),
                    lastName: results.lastName.toString(),
                    title: results.title.toString(),
                    bio: results.bio.toString(),
                    avatar: results.avatar.toString(),
                    // programmingLang: JSON.parse(results.languages.toString()),
                    // techStack: JSON.parse(results.technologies.toString()),
                    // intrests: JSON.parse(results.categories.toString()),
                }
            })
            return { success: "Your Profile has been updated successfully!" }
        }
        catch (e) {
            console.error(e)
            return fail(500, { message: "An Error has Occurred!" })
        }
    }
}