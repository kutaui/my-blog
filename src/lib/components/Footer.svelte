<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import type { LayoutServerData } from '../../../.svelte-kit/types/src/routes/$types';

	export let data: LayoutServerData;

	$theme = data.theme;
</script>

<hr />
<div>
	<a href="https://github.com/kutaui" target="_blank">
		<img
			src={$theme === 'dark' ? '/github-mark-white.png' : '/github-mark.png'}
			alt="Github Logo"
		/>
	</a>
</div>

<style>
	div {
		margin: 18px auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 40px;
	}
</style>
