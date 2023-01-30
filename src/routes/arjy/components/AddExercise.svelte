<script>
	import Exercise from './Exercise.svelte';
	let exercises = {
		chest: [
			{
				name: 'Bench press',
				defaultValues: {
					sets: 3,
					reps: 8
				}
			},
			{
				name: 'Incline bench press',
				defaultValues: {
					sets: 3,
					reps: 8
				}
			},
			{
				name: 'Dumbell bench press',
				defaultValues: {
					sets: 3,
					reps: 8
				}
			}
		],
		back: [
			{
				name: 'Deadlift',
				defaultValues: {
					sets: 3,
					reps: 8
				}
			},
			{
				name: 'Lat pulldown',
				defaultValues: {
					sets: 3,
					reps: 8
				}
			},
			{
				name: 'Low row',
				defaultValues: {
					sets: 3,
					reps: 8
				}
			}
		]
	};
</script>

<div>
	<form action="">
		<h3>Create workout</h3>
		<p>Select exercises</p>
		<fieldset class="card-exercise">
			<legend>Chest</legend>
			{#each exercises.chest as exercise, id}
				<Exercise {exercise} />
			{/each}
		</fieldset>
		<fieldset class="card-exercise">
			<legend>Back</legend>
			{#each exercises.back as exercise, id}
				<Exercise {exercise} />
			{/each}
		</fieldset>
	</form>
</div>

<style>
	.card-exercise {
		position: relative;
		border: 0;
		background: var(--primary-200);
		padding: var(--p-l) var(--p-l) var(--p-l) var(--p-l);
		margin-bottom: var(--mg-m);
	}

	.card-exercise legend {
		position: absolute;
		top: 10px;
		left: 10px;
	}
</style>
