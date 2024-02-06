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
	<Posts posts={data.posts}/>
</section>
