<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	let clicks = 0;
	$: clicks: 0;
	function clicked() {
		clicks++;
	}
</script>

<section>
	<div class="container">
		<div>
			<h2 class="heading-m">Components</h2>
			<p>Testing different kind of typical components used in web design.</p>
		</div>
		<div>
			<Card title="Basic button" subtext="This is a basic button recording your clicks">
				<Button on:click={clicked}>Click me!</Button>
				<div class="mt-m">You have clicked button {clicks} times</div>
			</Card>
		</div>
	</div>
</section>
