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
	<hr />
	<div>
		<Posts posts={data.posts} />
	</div>
</section>

<style>
    h1 {
        font-size: 3.5rem;
    }

    hr {
        border-color: inherit;
        margin: 2rem 0;
    }

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 2.5rem;
        }
    }
</style>
