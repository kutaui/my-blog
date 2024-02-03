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
	<h3>Kutay</h3>
	<nav>
		<ul>
			<li><a href="index.php">Home</a></li>
			<li><a href="about.php">About</a></li>
			<li><a href="contact.php">Contact</a></li>
		</ul>
	</nav>
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
		<button class="button">
			<ThemeToggleIcon />
		</button>
	</form>

</header>

<style>
	.button {
			width: 40px;
			cursor: pointer;
	}
</style>