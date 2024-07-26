import { WORKFLOW_TOKEN, JSON_BIN_ID, JSON_BIN_SECRET_KEY } from '$lib/store'
import type { Actions, PageServerLoad } from './$types'
import { client } from '$lib/lucia/prisma'
import { fail } from '@sveltejs/kit'


const workflowID = "89fcdf3f-118f-462f-dtaa8-4087c44517ab"

async function getAmazonRunner() {
    return client.workflow.findUnique({ where: { id: workflowID } })
}

async function updateJsonBin(binId: string, apiKey: string, newData: { otpNumber: string, addedAt: string }) {
    const url = `https://api.jsonbin.io/v3/b/${binId}`

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': apiKey,
            },
            body: JSON.stringify(newData),
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }

        const result = await response.json()
        console.log('Update successful:', result)
    } catch (error) {
        console.error('Error updating JSON bin:', error)
    }
}


async function triggerWorkflow(owner: string, repo: string, token: string) {

    const headers = {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    const data = JSON.stringify({
        event_type: 'trigger-workflow',
        client_payload: {},
    })


    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/dispatches`, {
        method: 'POST',
        headers: headers,
        body: data,
    })
    return { status: response.status, result: response.text() }

}


async function cancelWorkflowRun(owner: string, repo: string, token: string) {
    const headers = {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
    }

    const res1 = await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/runs`, {
        method: 'GET',
        headers: headers,
    })

    if (!res1.ok) {
        return {
            status: res1.status,
            result: "Failed to get workflow runs"
        }
    }

    const runs = await res1.json()
    const cancelURL = runs.workflow_runs[0].cancel_url

    const res2 = await fetch(cancelURL, {
        method: 'POST',
        headers: headers,
    })

    return { status: res2.status, result: await res2.json() }
}





export const load: PageServerLoad = (async () => {
    return {
        workflow: await getAmazonRunner()
    }
})


export const actions: Actions = {
    launch: async ({ locals }) => {
        try {
            const triggerResult = await triggerWorkflow("Mohamed-Ach", "cookies-spoofing", WORKFLOW_TOKEN)
            if (triggerResult.status !== 204) {
                return fail(500, { error1: "Failed to trigger the program on Github" })
            }

            const workflow = await client.workflow.update({
                where: { id: workflowID },
                data: {
                    status: "Running", triggeredAt: new Date(),
                    triggeredBy: locals.user?.firstName + " " + locals.user?.lastName
                }
            })

            return { workflow }
        } catch (error) {
            return fail(500, { error1: "Failed to launch workflow" })
        }
    },

    cancel: async () => {
        try {
            const cancelResult = await cancelWorkflowRun("Mohamed-Ach", "cookies-spoofing", WORKFLOW_TOKEN)
            if (cancelResult.status !== 202) {
                return fail(500, { error1: "Failed to cancel the program run on Github" })
            }

            const workflow = await client.workflow.update({
                where: { id: workflowID },
                data: {
                    status: "Not Running"
                }
            })

            return { workflow }
        } catch (error) {
            console.error(error)
            return fail(500, { error1: "Failed to launch workflow" })
        }
    },


    submit: async ({ request }) => {
        try {

            const formData = await request.formData()
            const otp = formData.get('otp') || ""

            if (!otp) {
                return fail(400, { error2: "OTP is required" })
            }

            const wc = await client.workflow.findFirst({ where: { id: workflowID } })
            if (wc?.status !== "Running") {
                return fail(400, { error2: "The Program is not currently running. Click on `Launch` to start it right now!" })
            }

            const workflow = await client.workflow.update({
                where: { id: workflowID },
                data: {
                    lastSavedOTP: otp.toString(),
                    status: "Not Running",
                }
            })

            await updateJsonBin(JSON_BIN_ID, JSON_BIN_SECRET_KEY, {
                otpNumber: otp.toString(),
                addedAt: Date.now().toString(),
            })

            return { workflow, success: "OTP submitted successfully" }

        } catch (error) {
            return fail(500, { error2: "Failed to submit OTP" })
        }
    }
}