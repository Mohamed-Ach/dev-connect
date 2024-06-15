// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: string;
			// user: {
			// 	email: string,
			// 	firstName: string,
			// 	lastName: string,
			// 	sex: string,
			// 	avatar: string,
			// } | null;
			user: import("lucia").User | null;
			session: import("lucia").Session | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
