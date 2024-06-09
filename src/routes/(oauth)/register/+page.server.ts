import { API_BASE_URL } from '$lib/store/index';
import { fail } from '@sveltejs/kit';


export const actions = {
    default: async ({ request }) => {

        const formData = Object.fromEntries(await request.formData());
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: formData.firstName,
                last_name: formData.lastName,
                username: formData.firstName.toString().toLowerCase() + "_" + formData.lastName.toString().toLowerCase(),
                email: formData.email,
                password: formData.password
            })
        };

        try {
            const response = await fetch(API_BASE_URL + '/user/signup', options);
            const data = await response.json();
            if (!response.ok) return fail(400, { error: data.error, loading: false });
            return { success: "Your Account has been created successfully! Please check your email to verify your account.", loading: false }

        } catch (error) {
            console.log(error)
            return fail(500, { error: "An error has occurred, Please try again!", loading: false })
        }
    }
}
