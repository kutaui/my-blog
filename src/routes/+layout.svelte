<script lang="ts">
	import '../app.css';
	import posthog from 'posthog-js';

	import Header from '$lib/components/Header/Header.svelte';
	import { theme } from '$lib/stores/theme';
	import { browser } from '$app/environment';
	import type { LayoutServerData } from '../../.svelte-kit/types/src/routes/$types';
	import Footer from '$lib/components/Footer.svelte';

	posthog.init('phc_r4q2OTqmSdtyl3zUGzLMrAc8KBW3lIkHVhdKMm60l9n', {
		api_host: 'https://app.posthog.com'
	});

	export let data: LayoutServerData;

	$theme = data.theme;
	$: browser && (document.documentElement.dataset.theme = $theme);
</script>

<Header />
<slot />
<Footer {data} />
