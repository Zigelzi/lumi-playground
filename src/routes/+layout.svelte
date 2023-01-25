<script>
	import '$lib/assets/reset.css';
	import '$lib/assets/app.css';

	import Header from '../lib/components/Header.svelte';
</script>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
		rel="stylesheet"
	/>
	<title>MS - Digital Playground</title>
</head>

<Header />
<main>
	<slot />
</main>
