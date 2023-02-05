<script>
	import { onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { CategoryStore } from '../stores/CategoryStore';

	let categories = [];
	const categoryStoreUnsub = CategoryStore.subscribe((data) => {
		categories = data;
	});

	onDestroy(() => {
		categoryStoreUnsub();
	});
</script>

<div>
	<h2 class="mb-m heading-m">Select category</h2>
	{#each categories as category}
		<a class="p-m card-primary mb-m" href="{$page.route.id}/{category.id}">{category.name}</a>
	{/each}
</div>
