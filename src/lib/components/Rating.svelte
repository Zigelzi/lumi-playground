<script>
	import RatingSelect from './RatingSelect.svelte';
	let rating = 1;
	let isCompleted = false;

	function submitFeedback() {
		isCompleted = true;
	}
</script>

<div>
	{#if !isCompleted}
		<div class="feedback-form">
			<span class="bg-circle-gray">
				<svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"
					><path
						d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
						fill="#FC7614"
					/></svg
				>
			</span>
			<form action="" on:submit={submitFeedback}>
				<fieldset>
					<legend class="feedback-form-title mv-l">How did we do?</legend>
					<p>
						Please let us know how we did with your support request. All feedback is appreciated to
						help us improve our offering!
					</p>
					<RatingSelect numberOfRatings={5} bind:rating />
				</fieldset>
				<button class="btn-submit">Submit</button>
			</form>
		</div>
	{:else}
		<div class="feedback-form">
			<p>You selected {rating} out of 5</p>
			<p class="feedback-form-title">Thank you!</p>
			<p>
				We appreciate you taking the time to give a rating. If you ever need more support, don’t
				hesitate to get in touch!
			</p>
		</div>
	{/if}
</div>

<style>
	:root {
		--orange: hsl(25, 97%, 53%);
		--gray-200: hsl(217, 12%, 63%);
		--gray-500: hsl(216, 12%, 54%);
		--blue-700: hsl(213, 19%, 18%);
		--blue-900: hsl(216, 12%, 8%);
	}

	.bg-circle-gray {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		width: 50px;
		background-color: hsla(217, 12%, 63%, 0.2);
		border-radius: 50%;
	}

	.feedback-form {
		background: linear-gradient(0deg, var(--blue-900) 10%, var(--blue-700));
		color: var(--gray-200);
		padding: var(--p-m);
		border-radius: 20px;
		max-width: 400px;
	}

	.feedback-form-title {
		color: var(--white);
		font-size: var(--fs-600);
		font-weight: 700;
	}

	fieldset {
		border: none;
	}

	.btn-submit {
		background-color: var(--orange);
		color: var(--white);
		font-weight: 700;
		border: none;
		padding: 1em 0;
		width: 100%;
		border-radius: 50px;
		cursor: pointer;
		transition: background-color 0.2s, color 0.1s;
	}

	.btn-submit:hover,
	.btn-submit:focus {
		background-color: var(--white);
		color: var(--orange);
	}
</style>
