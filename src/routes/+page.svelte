<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>Kutay's Blog</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href="/{post.slug}" class="title">{post.title}</a>
				<div class="categories">
					<p class="date">{formatDate(post.date)}</p>
					{#each post.categories as category}
						<a href="/categories/{category}" class="category">#{category}</a>
					{/each}
				</div>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		margin: 0 auto;
	}

	.posts {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.post {
		margin-bottom: 2rem;
	}

	.title {
		width: 100%;
		position: relative;
		padding: 0.2em 0;
		font-size: 2.8rem;
		font-family: 'JetBrains Mono', monospace;
		font-weight: 600;
		color: inherit;
		text-decoration: none;
	}

	.categories {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-items: center;
		gap: 0.5em;
		margin: 0.5rem 0;
	}

	.category {
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

	.description {
		font-size: 1.6rem;
		color: var(--text-color);
		margin: 0.5rem 0;
		width: 85%;
		font-family: 'Merriweather', serif;
	}

	.date {
		font-size: 1.2rem;
		color: #353535;
		font-weight: 600;
	}

	a:hover {
		opacity: 0.7;
	}
</style>
