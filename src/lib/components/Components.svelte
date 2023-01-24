<script>
	import Button from './Button.svelte';
	import Card from './Card.svelte';
	let clicks = 0;
	$: clicks: 0;
	function clicked() {
		clicks++;
	}
</script>

<div>
	<h2 class="heading-l">Components</h2>
	<p>Testing different kind of typical components used in web design.</p>
</div>
<div>
	<Card title="Basic button" subtext="This is a basic button recording your clicks">
		<Button on:click={clicked}>Click me!</Button>
		<div class="mt-m">You have clicked button {clicks} times</div>
	</Card>
</div>
