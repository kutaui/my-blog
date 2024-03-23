<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';

	export let data;
</script>

<svelte:head>
	<title>Kutay's Blog</title>
	<meta property="twitter:title" content="Kutay's Blog" />
	<meta property="twitter:description" content="All the things Web Development" />
	<meta property="og:title" content="Kutay's Blog" />
	<meta property="og:description" content="All the things Web Development" />
	<meta name="title" content="Kutay's Blog" />
	<meta name="description" content="All the things Web Development" />
</svelte:head>

<section>
	<Posts posts={data.posts} />
</section>

<style>
</style>
