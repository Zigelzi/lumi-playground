<script>
	export let title = '';
	export let subtext = '';
</script>

<div class="card">
	<div class="card-heading">
		<p class="heading-m">
			{title}
		</p>
		<p class="card-subtext">{subtext}</p>
	</div>
	<div class="card-content"><slot /></div>
</div>

<style>
	.card {
		background-color: var(--primary-500);
		padding: var(--p-l);
		border-radius: 15px;
		max-width: 31rem;
	}

	.card-heading p {
		line-height: 1;
	}
</style>
