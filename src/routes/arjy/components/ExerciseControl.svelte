<script>
	export let exerciseName;
	export let exerciseValue;
	export let type;

	function increment() {
		exerciseValue++;
	}

	function decrement() {
		if (exerciseValue > 0) {
			exerciseValue--;
		}
	}
</script>

<div class="exercise-controls">
	<button class="btn-mini" on:click|preventDefault={decrement}>-</button>
	<input
		type="number"
		name="{exerciseName}-{type}"
		id="{exerciseName}-{type}"
		class="exercise-input"
		value={exerciseValue}
	/>
	<button class="btn-mini" on:click|preventDefault={increment}>+</button>
</div>

<style>
	.exercise-controls {
		display: flex;
		gap: 10px;
	}

	.exercise-input {
		flex-shrink: 1;
		min-width: 100px;
		background-color: var(--primary-200);
		border: none;
		color: var(--primary-900);
		text-align: center;
		font-size: var(--fs-600);
	}

	.btn-mini {
		padding: var(--p-m);
		background-color: var(--primary-600);
		border: none;
		color: var(--white);
	}
</style>
