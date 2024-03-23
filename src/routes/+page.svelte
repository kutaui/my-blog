<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';

	export let data;
</script>

<svelte:head>
	<title>Kutay's Blog</title>
	<meta name="title" content="Kutay's Blog" />
	<meta name="description" content="All the things Web Development" />
	<meta property="image" content="https://blog.kutaybekleric.com/kakashi.jpg" />
	<!--- Twitter --->
	<meta property="twitter:title" content="Kutay's Blog" />
	<meta property="twitter:description" content="All the things Web Development" />
	<meta property="twitter:image" content="https://blog.kutaybekleric.com/kakashi.jpg" />
	<meta
		property="twitter:image:alt"
		content="Previw image of Kutay's Blog, Kakashi reading a book"
	/>
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:site" content="@kutaui" />
	<meta property="twitter:creator" content="@kutaul" />
	<!--- Open Graph --->
	<meta property="og:title" content="Kutay's Blog" />
	<meta property="og:description" content="All the things Web Development" />
	<meta property="og:url" content="https://blog.kutaybekleric.com" />
	<meta property="og:image" content="https://blog.kutaybekleric.com/kakashi.jpg" />
	<meta property="og:image:alt" content="Previw image of Kutay's Blog, Kakashi reading a book" />
</svelte:head>

<section>
	<Posts posts={data.posts} />
</section>

<style>
</style>
