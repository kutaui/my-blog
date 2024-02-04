import { json } from '@sveltejs/kit';
import { _getPosts } from '../+server';

export async function GET({ params }) {
	const posts = await _getPosts();

	const { slug } = params;

	const filteredPosts = posts.filter(post => post.categories.includes(slug));
	console.log(filteredPosts);
	return json(filteredPosts);
}
