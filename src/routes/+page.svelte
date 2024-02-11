<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';

	export let data;
</script>

<svelte:head>
	<title>Kutay's Blog</title>
	<meta name="description" content="Learn all things related to Web Development" />
	<meta property="og:title" content="Kutay's Blog" />
</svelte:head>

<section>
	<Posts posts={data.posts} />
</section>

<style>
</style>
