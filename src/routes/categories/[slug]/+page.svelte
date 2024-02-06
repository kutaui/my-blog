<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';
	import { page } from '$app/stores';

	export let data;

	$: tagName = $page.url.pathname.split('/').pop();

</script>

<svelte:head>
	<title>Categories | {tagName}</title>
</svelte:head>

<section>
	<h1>Posts tagged "{tagName}"</h1>
	<div>
		<Posts posts={data.posts} />
	</div>
</section>

<style>
    h1 {
        margin-bottom: 1em;
        font-size: 3.5rem;
    }
</style>
