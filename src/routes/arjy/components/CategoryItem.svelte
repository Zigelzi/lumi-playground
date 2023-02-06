<script>
	export let selectedCategory;
	export let category;
</script>

<div>
	<input
		type="radio"
		id={category.name}
		name={category.name}
		bind:group={selectedCategory}
		value={category.name}
		on:change
	/>
	<label for={category.name}>{category.name}</label>
</div>
