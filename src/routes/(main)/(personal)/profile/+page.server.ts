import type { PageServerLoad } from './$types'
import { client } from '$lib/lucia/prisma'


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



export const load = (async ({ locals }) => {
    const id = locals.user?.id || ""
    return {
        user: locals.user,
        userData: await getUserData(id)
    }
}) satisfies PageServerLoad