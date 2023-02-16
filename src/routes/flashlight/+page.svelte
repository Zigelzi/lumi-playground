<script>
	import form from './form.json';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="m-l">
	<form action="">
		{#each form.data[0].questions as question}
			{#if question.type === 'select'}
				<fieldset class="mb-m">
					<legend>
						{question.label} - Required
					</legend>
					<ul>
						{#each question.options as option}
							<li>
								<label for={option.uuid}
									>{option.label}
									{#if question.subtype === 'multiple'}
										<input id={option.uuid} type="checkbox" />
									{:else}
										<input id={option.uuid} type="radio" />
									{/if}
								</label>
							</li>
						{/each}
					</ul>
				</fieldset>
			{:else}
				<div class="mb-m">
					<label for={question.uuid}>
						{question.label} <input id={question.uuid} type="text" /></label
					>
				</div>
			{/if}
		{/each}
		<button type="submit">Submit</button>
	</form>
</div>
