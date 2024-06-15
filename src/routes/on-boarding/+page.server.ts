import { fail, redirect, type Actions } from "@sveltejs/kit"
import { client } from "$lib/lucia/prisma"

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const results = Object.fromEntries(await request.formData())
        try {
            await client.user.update({
                where: {
                    id: locals.user?.id
                },
                data: {
                    onBoarded: true,
                    title: results.title.toString(),
                    sex: results.gender.toString(),
                    bio: results.bio.toString(),
                    programmingLang: JSON.parse(results.languages.toString()),
                    techStack: JSON.parse(results.technologies.toString()),
                    intrests: JSON.parse(results.categories.toString()),

                }
            })

        }
        catch (e) {
            console.error(e)
            return fail(500, { message: "An Error has Occurred!" })
        }

        redirect(302, "/profile")

    }
}