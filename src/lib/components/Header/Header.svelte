<script lang="ts">
	import { browser } from '$app/environment';
	import { applyAction, enhance } from '$app/forms';
	import ThemeToggleIcon from './ThemeToggleIcon.svelte';
	import { theme } from '$lib/stores/theme';
	import type { Theme } from '../../../hooks.server';


	const deriveNextTheme = (theme: Theme): Theme => {
		switch (theme) {
			case 'dark':
				return 'light';
			case 'light':
				return 'dark';
			case 'auto':
			default:
				if (!browser) return 'auto';
				return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
		}
	};
	$: nextTheme = deriveNextTheme($theme);
</script>

<header>
	<h3>
		<a href="/">
			Kutay
		</a>
	</h3>
	<nav>
		<ul>
			<li><a href="/categories">Categories</a></li>
		</ul>
		<form
			method="POST"
			action="/?/theme"
			use:enhance={async () => {
				$theme = nextTheme

				return async ({result}) => {
					await applyAction(result)
				}
			}}
		>
			<input name="theme" value={nextTheme} hidden />
			<button>
				<ThemeToggleIcon />
			</button>
		</form>
	</nav>
</header>

<style>
    button {
        width: 40px;
        cursor: pointer;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0 0 0;
        background-color: var(--background-color);
        color: var(--text-color);
        margin: 0 auto 2rem auto;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        display: block;
        position: relative;
        padding: 0.2em 0;
        font-size: 1.5rem;
        font-family: 'JetBrains Mono', monospace;
    }

    li {
        margin: 0 1.5rem;
    }

    h3 a {
        font-size: 2.5rem;
    }

    a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.13em;
        background-color: var(--text-color);
        opacity: 0;
        transition: opacity 350ms, transform 350ms;
    }

    a:hover::after,
    a:focus::after {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
    }

    li a {
        overflow: hidden;
    }

    li a::after {
        opacity: 1;
        transform: translate3d(-102%, 0, 0);
    }

    li a:hover::after,
    li a:focus::after {
        transform: translate3d(0, 0, 0);
    }
</style>