import type { PageServerLoad } from './$types';


async function getMessages(roomID: string) {
    const endpoint = "http://localhost:3000/api/v2/ws/conversation/messages/" + roomID
    const token = "0190d6c4-fcb6-4097-99e4-3a272dffd5cf"

    let messages = []
    try {
        const response = await fetch(endpoint, {
            headers: {
                Authorization: token
            }
        })
        messages = await response.json()
    }
    catch (error) {
        console.error(error)
    }
    return messages
}


export const load: PageServerLoad = async ({ params }) => {
    const { roomID } = params; // Assuming you have a route parameter for conversationId
    return {
        messages: await getMessages(roomID)
    }
}