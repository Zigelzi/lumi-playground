<section>
	<div class="container mv-m">
		<div>
			<h2 class="heading-l">Flexbox</h2>
			<p>Practising using flexbox</p>
		</div>
		<div>
			<h3 class="heading-m">This is the flex parent</h3>
			<div class="flex-parent">
				<div>Child 1</div>
				<div>Child 2</div>
				<div>Child 3</div>
			</div>
		</div>
	</div>
</section>

<style>
	.flex-parent {
		display: flex;
		border: 2px solid var(--primary-900);
		gap: 10px;
	}

	.flex-parent div {
		background-color: var(--secondary-500);
		color: var(--white);
		padding: var(--p-s);
	}
</style>
