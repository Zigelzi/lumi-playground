<script>
	import { onDestroy } from 'svelte';
	import { WorkoutStore } from './stores/WorkoutStore';
	import { page } from '$app/stores';

	let workouts = [];
	const workoutStoreUnsub = WorkoutStore.subscribe((data) => {
		workouts = data;
	});

	onDestroy(() => {
		workoutStoreUnsub();
	});
</script>

<section>
	<div class="container mv-l">
		<div class="mb-l">
			<h2 class="heading-l ">Ärjy</h2>
			<p>Create gym program that leads to results</p>
		</div>
		<div>
			<h2 class="heading-m">Workouts</h2>
			{#if workouts.length > 0}
				<a class="btn-primary pv-s ph-m fw-bold mv-l" href="{$page.route.id}/workout/"
					>Create workout</a
				>
				{#each workouts as workout}
					<div class="card-primary p-s mb-s">
						{workout.name}
					</div>
				{/each}
			{:else}
				<p class="mb-l">No existing workouts, create one!</p>

				<a class="btn-primary pv-s ph-m fw-bold mv-l" href="{$page.route.id}/workout/"
					>Create workout</a
				>
			{/if}
		</div>
	</div>
</section>

<style>
</style>
