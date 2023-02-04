<script>
	export let category;
</script>

<div class="card-category p-s mb-s">
	<h3>{category.name}</h3>
</div>

<style>
	.card-category {
		border: var(--gray-100) 1px solid;
		border-radius: 5px;
		box-shadow: 0px 2px 5px 0 hsla(0, 0%, 10%, 0.05);
		cursor: pointer;
	}

	h3 {
		margin: 0;
	}
</style>
