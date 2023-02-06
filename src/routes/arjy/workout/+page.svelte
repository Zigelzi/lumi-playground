<script>
	import { onDestroy } from 'svelte';
	import CategorySelection from '../components/CategorySelection.svelte';

	let workout = [];
	let currentStep = 1;
	let formSteps = ['category', 'exercise', 'values'];
	let selectedCategory;

	$: activeStep = formSteps[currentStep - 1];

	function moveToNextStep() {
		if (currentStep < formSteps.length) {
			currentStep++;
		}
	}

	function postWorkout() {}
</script>

<div class="">
	<form action="post" on:submit|preventDefault={postWorkout} class="mb-l">
		{#if activeStep === 'category'}
			<CategorySelection on:change={moveToNextStep} bind:selectedCategory />
		{:else if activeStep === 'exercise'}
			<div>
				<p>Exercises for category: {selectedCategory}</p>
			</div>
		{/if}
	</form>
	<div>
		<button
			class="btn-primary ph-s pv-xs"
			on:click={() => {
				currentStep = 1;
			}}>Reset</button
		>
	</div>
</div>
