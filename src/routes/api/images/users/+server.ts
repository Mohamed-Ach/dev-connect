// Import necessary modules
import fs from 'fs/promises'
import crypto from 'crypto'

export const POST = (async ({ request }) => {

    // Get the uploaded image from the request
    const formData = await request.formData()
    const image = formData.get('image') as File

    // Check if a file was uploaded
    if (!image) {
        return new Response(
            JSON.stringify({ error: 'No file uploaded' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 400,
        })
    }

    try {
        // Get the file buffer
        const buffer = Buffer.from(await image.arrayBuffer())

        // Get the file name
        const fileName = image.name

        // Generate a new file name
        let newFileName = crypto.randomBytes(15).toString('hex') + crypto.randomBytes(15).toString('hex')
        newFileName = newFileName + '.' + fileName.split('.').pop()

        // Save the uploaded file to the assets directory
        await fs.writeFile("./server/users/" + newFileName, buffer)

        return new Response(
            JSON.stringify({ name: newFileName }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200,
        })

    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Image could not be uploaded: ' + error }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 500,
        })
    }

})