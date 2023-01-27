<script>
	export let rating = 1;
	export let numberOfRatings = 3;
</script>

<ol class="rating">
	{#each Array(numberOfRatings) as _, i}
		<li>
			<label class="radio-label" for="rating_{i + 1}">
				<input
					class="radio-input"
					bind:group={rating}
					value={i + 1}
					type="radio"
					name="rating"
					id="rating_{i + 1}"
				/>
				<span class="radio-value-text">{i + 1}</span>
			</label>
		</li>
	{/each}
</ol>

<style>
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
		font-weight: 700;
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
		font-weight: 700;

		color: var(--white);
	}

	.radio-input:checked + .radio-value-text::after,
	.radio-label:hover > .radio-value-text::after {
		opacity: 0.9;
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
		opacity: 0.2;
	}

	.radio-value-text,
	.radio-value-text::after {
		transition: background-color 0.2s, color 0.1s, opacity 0.2s;
	}
</style>
