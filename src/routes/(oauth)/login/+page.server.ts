import { API_BASE_URL } from '$lib/store/index';
import { fail, redirect } from '@sveltejs/kit';
import fetch from 'node-fetch';

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = Object.fromEntries(await request.formData());

        console.log(formData);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        };

        let data: any;
        try {
            const response = await fetch(API_BASE_URL + '/user/login', options);
            data = await response.json() as any;
            console.log(data)
            if (!response.ok) return fail(400, { error: data.error, loading: false });

        } catch (error) {
            console.log(error)
            return fail(500, { error: "An error has occurred, Please try again!", loading: false })
        }

        // * Create a Session Cookie:
        cookies.set('session', data.AccessToken, {
            // send cookie for every page
            path: '/',
            // server side only cookie so you can't use `document.cookie`
            httpOnly: true,
            // only requests from same site can send cookies
            // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
            sameSite: 'strict',
            // only sent over HTTPS in production
            secure: process.env.NODE_ENV === 'production',
            // set cookie to expire after a month
            maxAge: formData.keepSignedIn ? 60 * 60 * 24 * 30 : 60 * 60 * 24,
        })

        throw redirect(302, '/on-boarding')
    }
}
