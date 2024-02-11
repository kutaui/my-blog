<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';

	export let data;
</script>

<svelte:head>
	<title>Kutay | Categories</title>
	<meta name="description" content="Categories to filter by." />
</svelte:head>

<section>
	<h3>Categories</h3>
	<div>
		{#each data.posts as post, index}
			{#each post.categories as category}
				{#if !data.posts
					.flatMap((p) => p.categories)
					.slice(0, index)
					.includes(category)}
					<Tag link="/categories/{category}" title="#{category}" />
				{/if}
			{/each}
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h3 {
		font-family: 'JetBrains Mono', monospace;
		font-weight: 600;
		font-size: 3rem;
		margin-bottom: 2rem;
	}

	div {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;
		width: 70%;
	}

	@media screen and (max-width: 600px) {
		h3 {
			font-size: 2rem;
		}
	}
</style>
