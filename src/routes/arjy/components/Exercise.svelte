<script>
	export let selectedExerciseId;
	export let exercise;

	function nameToLowercase(name) {
		name = name.toLowerCase(name);
		name = name.replace(' ', '_');
		return name;
	}
</script>

<li class="">
	<input
		type="radio"
		name={nameToLowercase(exercise.name)}
		id={nameToLowercase(exercise.name)}
		bind:group={selectedExerciseId}
		value={exercise.id}
		class="exercise-input"
	/>
	<label for={nameToLowercase(exercise.name)} class="exercise p-s">
		{exercise.name}
	</label>
</li>

<style>
	li {
		display: flex;
		margin-bottom: var(--mg-s);
		position: relative;
	}
	.exercise {
		border: 1px solid var(--gray-100);
		box-shadow: 0 2px 10px 0 hsla(76, 30%, 10%, 0.1);
		flex-grow: 1;
		cursor: pointer;
	}

	.exercise:hover {
		border-color: var(--primary-500);
	}

	.exercise-input:focus + .exercise {
		border-color: var(--primary-500);
	}

	.exercise-input {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0%;
		height: 100%;
		width: 100%;
		z-index: -1;
	}

	.exercise-input:checked + .exercise {
		border-color: var(--primary-500);
	}
</style>
