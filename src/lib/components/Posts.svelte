<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Tag from '$lib/components/Tag.svelte';
	import type { Post } from '$lib/types';

	export let posts: Post[] = [];
</script>


<ul class="posts">
	{#each posts as post}
		<li class="post">
			<a href="/{post.slug}" class="title"><span>>></span>{post.title}</a>
			<div class="categories">
				<p class="date">{formatDate(post.date)}</p>
				{#each post.categories as category}
					<Tag link="/categories/{category}" title="#{category}" />
				{/each}
			</div>
			<p class="description">{post.description}</p>
		</li>
	{/each}
</ul>

<style>
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

    span {
        margin-right: 3px;
    }

    .categories {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-items: center;
        gap: 0.5em;
        margin: 0.5rem 0;

    }

    .description {
        font-size: 1.6rem;
        color: var(--text-color-soft);

        margin: 1rem 0;
        width: 85%;
        font-family: 'Merriweather', serif;
    }

    .date {
        font-size: 1.2rem;
        color: var(--text-color-soft);
        font-weight: 600;
    }

    a:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 600px) {
        .title {
            font-size: 2.5rem;
        }

		    .description {
		        font-size: 1.4rem;
		    }

		    .date {
		        font-size: 1rem;
		    }
    }

    @media screen and (max-width: 400px) {
        .title {
            font-size: 2rem;
        }

        .description {
            font-size: 1rem;
        }

        .date {
						font-size: 0.8rem;
				}
    }
</style>
