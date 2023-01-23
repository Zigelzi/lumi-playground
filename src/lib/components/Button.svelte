<button on:click><slot /></button>

<style>
	button {
		background-color: var(--primary-300);
		color: var(--white);
		border: none;
		padding: 0.5em 1em;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	button:hover,
	button:focus {
		background-color: var(--primary-500);
	}
</style>
