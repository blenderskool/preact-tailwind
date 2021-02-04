import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<header class="fixed top-0 left-0 w-full h-14 bg-purple-700 shadow-md z-50 flex items-center">
		<h1 class="px-4 text-2xl text-white leading-full">Preact App</h1>
		<nav class="ml-auto h-full">
			<Link activeClassName="bg-purple-900" href="/" class="inline-flex items-center h-full px-4 text-white hover:bg-purple-800">Home</Link>
			<Link activeClassName="bg-purple-900" href="/profile" class="inline-flex items-center h-full px-4 text-white hover:bg-purple-800">Me</Link>
			<Link activeClassName="bg-purple-900" href="/profile/john" class="inline-flex items-center h-full px-4 text-white hover:bg-purple-800">John</Link>
		</nav>
	</header>
);

export default Header;
