<div class="components-container">
	<aside class="side-nav-container">
		<h3 class="fw-bold">Projects</h3>
		<nav>
			<ul class="nav-list">
				<li><a href="/components/">Index</a></li>
				<li><a href="/components/rating/">Rating component</a></li>
			</ul>
		</nav>
	</aside>
	<section class="m-l components">
		<slot />
	</section>
</div>

<style>
	.components-container {
		display: flex;
		min-height: calc(100vh - var(--nav-height));
	}
	.side-nav-container {
		/* position: fixed; */
		top: var(--nav-height);
		bottom: 0;
		background-color: var(--primary-200);
		padding: var(--p-m) var(--p-l) var(--p-m) var(--p-m);
	}

	.components {
		align-self: center;
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	li {
		padding: var(--p-xs) 0;
	}

	a {
		text-decoration: none;
	}
</style>
