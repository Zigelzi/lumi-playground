<script>
	import Exercise from './Exercise.svelte';
	let exercises = {
		chest: [
			{
				name: 'Bench press',
				sets: 4,
				reps: 10,
				weight: 60
			},
			{
				name: 'Incline bench press',
				sets: 4,
				reps: 10,
				weight: 60
			},
			{
				name: 'Dumbell bench press',
				sets: 4,
				reps: 10,
				weight: 60
			}
		],
		back: [
			{
				name: 'Deadlift',
				sets: 4,
				reps: 10,
				weight: 60
			},
			{
				name: 'Lat pulldown',
				sets: 4,
				reps: 10,
				weight: 60
			},
			{
				name: 'Low row',
				sets: 4,
				reps: 10,
				weight: 60
			}
		]
	};
</script>

<div>
	<form method="post">
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
