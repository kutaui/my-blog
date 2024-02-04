import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export async function load({ params, fetch }) {
	try {
		const response = await fetch('/api/posts/' + params.slug);
		const posts: Post[] = await response.json();
		if (posts.length === 0) {
			throw error(404, `No posts found for category: ${params.slug}`);
		}
		return {
			posts
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
