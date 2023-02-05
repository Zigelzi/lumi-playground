<script>
	import { createEventDispatcher } from 'svelte';

	export let category;

	const dispatch = createEventDispatcher();

	function dispatchSelectionEvent() {
		dispatch('onCategorySelected', category.id);
	}
</script>

<button on:click={dispatchSelectionEvent} class="card-primary p-s mb-s">
	<h3>{category.name}</h3>
</button>

<style>
	h3 {
		margin: 0;
	}
</style>
