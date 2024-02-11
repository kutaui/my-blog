<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Tag from '$lib/components/Tag.svelte';

	export let data;
</script>

<svelte:head>
	<title>Kutay | {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<h1>{data.meta.title}</h1>

	<div class="tags">
		<p>{formatDate(data.meta.date)}</p>
		{#each data.meta.categories as category}
			<Tag link="/categories/{category}" title="#{category}" />
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		margin-inline: auto;
		width: 80%;
		margin: 0 auto;
	}

	h1 {
		text-transform: capitalize;
		width: 100%;
		position: relative;
		padding: 0.2em 0;
		font-size: 3.5rem;
		font-family: 'JetBrains Mono', monospace;
		font-weight: 600;
		color: inherit;
		text-decoration: none;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-items: center;
		gap: 0.5em;
		margin: 0.5rem 0 2rem 0;
	}

	.tags p {
		font-size: 1.5rem;
		color: var(--text-color-soft);
		margin-right: 2rem;
	}

	.prose {
		font-family: 'Merriweather', serif;
		font-size: 1.2rem;
		line-height: 2;
		color: var(--text-color-soft);
		margin-bottom: 5rem;
	}

	@media screen and (max-width: 768px) {
		article {
			width: 90%;
		}

		h1 {
			font-size: 2.5rem;
		}

		.tags p {
			font-size: 1.2rem;
		}

		.prose {
			font-size: 1rem;
		}
	}
</style>
