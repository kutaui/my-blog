<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';

	import Header from '$lib/components/Header/Header.svelte';
	import { theme } from '$lib/stores/theme';
	import { browser } from '$app/environment';
	import type { LayoutServerData } from '../../.svelte-kit/types/src/routes/$types';

	export let data: LayoutServerData;

	$theme = data.theme;
	$: browser && (document.documentElement.dataset.theme = $theme);
	inject();
</script>

<Header />
<slot />
