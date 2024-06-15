// Import necessary modules
import { client } from '$lib/lucia/prisma.js'


export const GET = (async ({ params }) => {
    const { id } = params

    try {
        const attachment = await client.attachment.findUnique({
            where: {
                name: id,
            },
        })

        if (!attachment) {
            return new Response(
                JSON.stringify({ error: 'Attachment you\'re looking for not found' }), {
                headers: {
                    'Content-Type': 'application/json',
                },
                status: 404,
            })
        }

        return new Response(
            attachment.attachment,
            {
                headers: {
                    'Content-Type': "image/**",
                    'Content-Disposition': `attachment filename=${id}`,
                },
            }
        )
    } catch (error) {
        console.error(error)
        return new Response(
            JSON.stringify({ error: 'An Error has occurred' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 500,
        })
    }

















    let assets = await getFiles()
    const reader = assets.find(img => img.name === id)

    if (!reader) {
        return new Response(
            JSON.stringify({ error: 'Image not found' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 404,
        })
    }

    return read(reader.url)
})
