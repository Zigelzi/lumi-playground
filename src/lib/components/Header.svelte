<script>
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<header>
	<nav>
		<ul class="primary-nav nav-list">
			<li class:nav-active={path === '/'}><a href="/">Home</a></li>
			<li class:nav-active={path === '/flex'}><a href="/flex">Flexbox</a></li>
			<li class:nav-active={path === '/components'}>
				<a href="/components">Components</a>
			</li>
			<li class:nav-active={path === '/components'}><a href="/arjy">Ärjy</a></li>
		</ul>
	</nav>
</header>

<style>
	nav {
		background-color: var(--primary-200);
	}

	.primary-nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: var(--p-s);
		gap: var(--mg-l);
		min-height: var(--nav-height);
		box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
	}

	li {
		display: flex;
		align-items: center;
		position: relative;
	}

	li::after {
		content: '';
		height: 3px;
		background-color: var(--primary-400);
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		transition: width 0.5s;
	}

	li:hover::after {
		width: 100%;
	}

	a {
		font-size: var(--fs-600);
		color: var(--primary-900);
		text-decoration: none;
		transition: color, 0.2s;
	}

	.nav-active a {
		color: var(--primary-400);
	}
</style>
