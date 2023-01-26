<div class="components-container">
	<aside class="side-nav-container visually-hidden">
		<h3 class="fw-bold">Projects</h3>
		<nav>
			<ul class="nav-list">
				<li><a href="/components/">Index</a></li>
				<li><a href="/components/rating/">Rating component</a></li>
			</ul>
		</nav>
	</aside>
	<section class="mv-m components container">
		<slot />
	</section>
</div>

<style>
	@media (min-width: 400px) {
		.components-container {
			display: flex;
			min-height: calc(100vh - var(--nav-height));
		}
		.side-nav-container {
			top: var(--nav-height);
			bottom: 0;
			background-color: var(--primary-200);
			padding: var(--p-m) var(--p-l) var(--p-m) var(--p-m);
			flex-shrink: 0;
		}

		.components {
			flex-grow: 1;
		}
	}

	li {
		padding: var(--p-xs) 0;
	}

	a {
		text-decoration: none;
	}
</style>
