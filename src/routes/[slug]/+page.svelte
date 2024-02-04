<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
	</hgroup>

	<div class="tags">
		<p>{formatDate(data.meta.date)}</p>
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
    article {
        max-inline-size: var(--size-content-3);
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
        color: #353535;
        margin-right: 2rem;
    }

    .tags > span {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        padding: 0.2em 0.5em;
        color: var(--text-color);
        border: 1px solid var(--text-color);
        font-size: 1.1rem;
        font-weight: 600;
        font-family: 'Merriweather', serif;
    }

    .prose {
        font-family: 'Merriweather', serif;
        font-size: 1.2rem;
        line-height: 2;
        color: var(--text-color);

    }
</style>
