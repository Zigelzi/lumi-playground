<script>
	import { page } from '$app/stores';
	import { ExerciseStore } from '../../stores/ExerciseStore';

	let exercises = ExerciseStore.getExercisesForCategory($page.params.id);
	console.log(`Exercises for category ${$page.params.id}: ${exercises}`);
</script>

<div>
	<h2 class="heading-m">Exercises</h2>
	{#each exercises as exercise}
		<div class="card-primary p-m mb-m">
			{exercise.name}
		</div>
	{/each}
</div>
