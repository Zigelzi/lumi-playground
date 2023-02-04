<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import CategorySelection from './components/CategorySelection.svelte';
	import Exercise from './components/Exercise.svelte';

	const views = [CategorySelection, Exercise];
	let currentViewIndex = 0;
	let activeComponent = null;

	function toggleView() {
		currentViewIndex = currentViewIndex == 0 ? 1 : 0;
	}

	function updateActiveComponent() {
		console.log(`Active component updated: ${currentViewIndex}`);
		activeComponent = views[currentViewIndex];
	}

	let selectedCategory = 1;

	function selectExercise(event) {
		console.log(event.detail);

		selectedCategory = event.detail;
		currentViewIndex = 1;
	}

	onMount(() => {
		updateActiveComponent();
	});
</script>

<section>
	<div class="container mv-l">
		<h2 class="heading-m text-center">Ärjy</h2>
		<p class="text-center">Create gym program that leads to results</p>
		{#if activeComponent == views[currentViewIndex]}
			<div transition:fade on:outroend={updateActiveComponent}>
				<svelte:component
					this={activeComponent}
					{selectedCategory}
					on:onCategorySelected={selectExercise}
				/>
			</div>
		{/if}
	</div>
</section>
