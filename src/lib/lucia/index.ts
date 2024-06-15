import { PrismaAdapter } from "@lucia-auth/adapter-prisma"
import { client } from "$lib/lucia/prisma"
import { dev } from "$app/environment"
import { Lucia } from "lucia"



const adapter = new PrismaAdapter(client.session, client.user)

export const auth = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            // set to `true` when using HTTPS
            secure: !dev
        }
    },
    getUserAttributes: (attributes) => {
        return {
            email: attributes.email,
            firstName: attributes.firstName,
            lastName: attributes.lastName,
            sex: attributes.sex,
            avatar: attributes.avatar
        }
    }
})

declare module "lucia" {
    interface Register {
        Lucia: typeof auth;
        DatabaseUserAttributes: DatabaseUserAttributes
    }
}

interface DatabaseUserAttributes {
    email: string
    firstName: string
    lastName: string
    sex: string
    avatar: string
}
