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

<div class="mv-m">
	<label for="{exerciseName}-{type}" class="fw-bold">
		{type}
	</label>
	<div class="exercise-controls mt-s">
		<button class="btn-mini" on:click|preventDefault={decrement} aria-label="decrement value"
			>-</button
		>

		<input
			type="number"
			name="{exerciseName}-{type}"
			id="{exerciseName}-{type}"
			class="exercise-input"
			bind:value={exerciseValue}
		/>
		<button class="btn-mini" on:click|preventDefault={increment} aria-label="increment value"
			>+</button
		>
	</div>
</div>

<style>
	.exercise-controls {
		display: flex;
		gap: 10px;
	}

	.exercise-input {
		flex-shrink: 1;
		min-width: 100px;
		border: none;
		border-bottom: 3px solid var(--gray-100);
		background-color: var(--primary-100);
		color: var(--primary-900);
		text-align: center;
		font-size: var(--fs-600);
	}

	.btn-mini {
		padding: 0.2em 0.7em;
		background-color: var(--primary-500);
		border: 2px solid var(--primary-500);
		color: var(--white);
		font-size: var(--fs-700);
		cursor: pointer;
		transition: background-color 0.2s, color 0.2s;
	}

	.btn-mini:hover {
		background-color: var(--primary-100);
		color: var(--primary-500);
	}
</style>
