<script lang="ts">
	export let title: string | undefined = undefined;
	export let link: string | undefined = undefined;
</script>

<a href={link}>
	{title}
</a>

<style>
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
		    text-decoration: none;
    }
</style>