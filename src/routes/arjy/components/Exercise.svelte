<script>
	export let exercise;

	function nameToLowercase(name) {
		name = name.toLowerCase(name);
		name = name.replace(' ', '_');
		return name;
	}
</script>

<div class="exercise">
	<h4 class="text-center fw-bold">{exercise.name}</h4>
	<div>
		<label for="{exercise.name}-sets" class="text-center exercise-label mv-m">Sets</label>
		<div class="exercise-controls">
			<button class="btn-mini">-</button>
			<input
				type="number"
				name="{exercise.name}-sets"
				id="{exercise.name}-sets"
				class="exercise-input"
				value={exercise.sets}
			/>
			<button class="btn-mini">+</button>
		</div>
	</div>
	<div>
		<label for="{exercise.name}-reps" class="text-center exercise-label mv-m">Reps</label>
		<div class="exercise-controls">
			<button class="btn-mini">-</button>
			<input
				type="number"
				name="{exercise.name}-weight"
				id="{exercise.name}-weight"
				class="exercise-input"
				value={exercise.reps}
			/>
			<button class="btn-mini">+</button>
		</div>
	</div>
	<div>
		<label for="{exercise.name}_weight" class="text-center exercise-label mv-m">Weight</label>
		<div class="exercise-controls">
			<button class="btn-mini">-</button>
			<input
				type="number"
				name="{exercise.name}_weight"
				id="{exercise.name}_weight"
				class="exercise-input"
				value={exercise.weight}
			/>
			<button class="btn-mini">+</button>
		</div>
	</div>
</div>

<style>
	.exercise {
		padding: var(--p-m) var(--p-l);
		background-color: var(--primary-300);
		margin-bottom: var(--mg-s);
		max-width: 300px;
	}

	.exercise-label {
		display: block;
	}

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
	}
</style>
