<script>
	import CategoryItem from './CategoryItem.svelte';
	let categories = [
		{
			name: 'Chest'
		},
		{
			name: 'Back'
		}
	];
</script>

<div>
	{#each categories as category}
		<CategoryItem {category} />
	{/each}
</div>
