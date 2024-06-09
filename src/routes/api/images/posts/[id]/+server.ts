// Import necessary modules
import { read } from "$app/server";
import { readdir } from 'fs/promises';
import { resolve } from 'path';

// Resolve the path to the assets directory
const assetsDir = resolve('server/posts');


// Asynchronously read the directory to get a list of files
async function getFiles() {
    try {
        const files = await readdir(assetsDir);

        // Process the list of files to create the assets array
        const assets = files.map((file) => {
            return {
                name: file,
                url: `/server/posts/${file}`
            };
        });
        return assets;
    } catch (error) {
        return []
    }
}



export const GET = (async ({ params }) => {
    const { id } = params
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
