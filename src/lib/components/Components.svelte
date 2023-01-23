<script>
	import Button from './Button.svelte';

	let clicks = 0;
	$: clicks: 0;
	function clicked() {
		clicks++;
	}
</script>

<div>
	<h2>Components</h2>
	<p>Testing different kind of typical components used in web design.</p>
</div>
<div>
	<h3>Button</h3>
	<p>Basic button</p>
	<Button on:click={clicked}>Click me!</Button>
	<div>You have clicked button {clicks} times</div>
</div>
