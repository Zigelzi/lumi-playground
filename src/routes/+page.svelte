<script>
	import Components from '$lib/components/Components.svelte';
</script>

<section>
	<div id="landing-page" class="container h-center">
		<div>
			<h1>Digital playground</h1>
			<p>Hi!</p>
			<p>
				This is the digital playground of Miika Savela! As you can see from my <a
					href="https://github.com/Zigelzi">GitHub profile</a
				>, I like trying out things. This is the place where you can find results of those
				experiments.
			</p>
			<p>Scroll down to find out more!</p>
		</div>
	</div>
</section>
<section>
	<div class="container">
		<Components />
	</div>
</section>

<style>
	#landing-page {
		min-height: 50vh;
	}

	#landing-page h1 {
		font-size: var(--fs-heading-l);
	}
	.h-center {
		display: flex;
		align-items: center;
	}
</style>
