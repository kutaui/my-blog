<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';

	export let data;
</script>

<svelte:head>
	<title>Kutay's Blog</title>
</svelte:head>

<section>
	<Posts posts={data.posts} />
</section>

<style>

</style>
