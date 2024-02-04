import type { LayoutServerLoad } from './$types';
import type { Post } from '$lib/types';

export const load: LayoutServerLoad = async ({ locals,fetch }) => {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	const { theme } = locals;

	return {
		theme,
		posts
	};
};
