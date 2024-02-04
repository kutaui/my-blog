<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Categories</title>
</svelte:head>

<section>
	<h3>Categories</h3>
	<div>
		{#each data.posts as post}
			{#each post.categories as category}
				<a href="/categories/{category}">#{category}</a>
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
        margin-bottom: 2rem
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

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        padding: 0.2em 0.5em;
        color: var(--text-color-soft);
        border: 1px solid var(--text-color);
        font-size: 1.1rem;
        font-weight: 600;
        font-family: 'Merriweather', serif;
    }
</style>