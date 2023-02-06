<script>
	import { onDestroy } from 'svelte';
	import { CategoryStore } from '../stores/CategoryStore';
	import CategoryItem from '../components/CategoryItem.svelte';

	export let selectedCategory;

	let categories = [];

	const categoryStoreUnsub = CategoryStore.subscribe((data) => {
		categories = data;
	});

	onDestroy(() => {
		categoryStoreUnsub();
	});
</script>

<div>
	<fieldset>
		<legend>Select category</legend>
		{#each categories as category}
			<CategoryItem {category} bind:selectedCategory on:change />
		{/each}
	</fieldset>
</div>
