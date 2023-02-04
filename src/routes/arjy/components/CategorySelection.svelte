<script>
	import { onDestroy } from 'svelte';
	import CategoryItem from './CategoryItem.svelte';
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
	{#each categories as category}
		<CategoryItem {category} />
	{/each}
</div>
