<script>
	import { createEventDispatcher } from 'svelte';

	export let category;

	const dispatch = createEventDispatcher();

	function dispatchSelectionEvent() {
		dispatch('onCategorySelected', category.id);
	}
</script>

<button on:click={dispatchSelectionEvent} class="card-category p-s mb-s">
	<h3>{category.name}</h3>
</button>

<style>
	.card-category {
		border: var(--gray-100) 1px solid;
		border-radius: 5px;
		box-shadow: 0px 2px 5px 0 hsla(0, 0%, 10%, 0.05);
		cursor: pointer;
		background-color: var(--primary-100);
		color: var(--primary-900);
		display: block;
		width: 100%;
		text-align: left;
	}

	h3 {
		margin: 0;
	}
</style>
