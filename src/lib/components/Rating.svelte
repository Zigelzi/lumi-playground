<script>
	let rating = 1;
	let isCompleted = false;
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
			<form action="">
				<fieldset>
					<legend class="feedback-form-title">How did we do?</legend>
					<p>
						Please let us know how we did with your support request. All feedback is appreciated to
						help us improve our offering!
					</p>
					<ol class="rating">
						<li>
							<label class="radio-label" for="rating_1">
								<input
									class="radio-input"
									bind:group={rating}
									value="1"
									type="radio"
									name="rating"
									id="rating_1"
								/>
								<span class="radio-value-text">1</span>
							</label>
						</li>
						<li>
							<label class="radio-label" for="rating_2">
								<input
									class="radio-input"
									bind:group={rating}
									value="2"
									type="radio"
									name="rating"
									id="rating_2"
								/>
								<span class="radio-value-text">2</span>
							</label>
						</li>
						<li>
							<label class="radio-label" for="rating_3">
								<input
									class="radio-input"
									bind:group={rating}
									value="3"
									type="radio"
									name="rating"
									id="rating_3"
								/>
								<span class="radio-value-text">3</span>
							</label>
						</li>
						<li>
							<label class="radio-label" for="rating_4">
								<input
									class="radio-input"
									bind:group={rating}
									value="4"
									type="radio"
									name="rating"
									id="rating_4"
								/>
								<span class="radio-value-text">4</span>
							</label>
						</li>
						<li>
							<label class="radio-label" for="rating_5">
								<input
									class="radio-input"
									bind:group={rating}
									value="5"
									type="radio"
									name="rating"
									id="rating_5"
								/>
								<span class="radio-value-text">5</span>
							</label>
						</li>
					</ol>
				</fieldset>
				<button>Submit</button>
				<p>You selected {rating}</p>
			</form>
		</div>
	{:else}
		<div class="feedback-form">
			<p>You selected 1 out of 5</p>
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
	.feedback-form {
		background-color: var(--blue-700);
		color: var(--gray-200);
		padding: var(--p-m);
	}

	.rating {
		list-style: none;
		display: flex;
		justify-content: space-around;
		margin: var(--mg-l) 0;
	}

	.radio-label {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		cursor: pointer;
	}

	.radio-label:hover > .radio-value-text::after {
		background-color: var(--orange);
	}

	.radio-input {
		/* Visually hide radio button but keep it accessible for screen readers */
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
	}

	.radio-input:checked + .radio-value-text,
	.radio-label:hover > .radio-value-text {
		color: var(--white);
	}

	.radio-input:checked + .radio-value-text::after,
	.radio-label:hover > .radio-value-text::after {
		opacity: 0.8;
	}

	.radio-value-text {
		color: var(--gray-200);
		z-index: 1;
	}

	.radio-value-text::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 50%;
		background-color: var(--gray-200);
		z-index: -1;
		opacity: 0.4;
	}

	.radio-value-text,
	.radio-value-text::after {
		transition: background-color 0.2s, color 0.1s, opacity 0.2s;
	}

	.feedback-form-title {
		color: var(--white);
		font-size: var(--fs-600);
	}

	fieldset {
		border: none;
	}
</style>
