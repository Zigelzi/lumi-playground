<header>
	<nav>
		<ul class="primary-nav">
			<li><a href="/">Home</a></li>
			<li><a href="/flex">Flexbox</a></li>
			<li><a href="/components">Components</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		background-color: var(--secondary-300);
	}

	.primary-nav {
		display: flex;
		justify-content: center;
		padding: var(--p-s);
		gap: var(--p-s);
	}

	li {
		list-style: none;
		padding: var(--p-s);
	}

	a {
		font-size: var(--fs-600);
		color: var(--white);
		text-decoration: none;
		transition: color, 0.2s;
	}

	a:hover,
	a:focus {
		color: var(--primary-400);
	}
</style>
