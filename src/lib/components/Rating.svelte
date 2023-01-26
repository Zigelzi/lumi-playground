<script>
	let isCompleted = false;
</script>

<div>
	{#if !isCompleted}
		<div class="card">
			<span class="bg-circle-gray">
				<svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"
					><path
						d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
						fill="#FC7614"
					/></svg
				>
			</span>
			<h4 class="card-title">How did we do?</h4>
			<p>
				Please let us know how we did with your support request. All feedback is appreciated to help
				us improve our offering!
			</p>
			<ol class="rating">
				<li class="bg-circle-gray"><span>1</span></li>
				<li class="bg-circle-gray"><span>2</span></li>
				<li class="bg-circle-gray"><span>3</span></li>
				<li class="bg-circle-gray"><span>4</span></li>
				<li class="bg-circle-gray"><span>5</span></li>
			</ol>
			<button>Submit</button>
		</div>
	{:else}
		<div class="card">
			<p>You selected 1 out of 5</p>
			<p class="card-title">Thank you!</p>
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
	.card {
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

	.rating li {
		line-height: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bg-circle-gray {
		position: relative;
	}

	.bg-circle-gray::after {
		content: '';
		position: absolute;
		opacity: 0.2;
		background-color: var(--gray-500);
		height: 50px;
		width: 50px;
		border-radius: 100%;
		/* top: -50%; */
	}

	.card-title {
		color: var(--white);
		font-size: var(--fs-600);
	}
</style>
