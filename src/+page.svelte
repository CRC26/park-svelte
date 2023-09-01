<script>
	import Header from '$lib/Header.svelte';
	import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
	<WelcomeNavigator />
</Header>

<div class="columns is-vcentered content">
	<div class="column has-text-centered">
		<img width="300" src="/swan.jpg" alt="swan" />
	</div>
	<div class="column">
		<h1 class="title">Local Parks</h1>
		<p>Create a list of favourite parks!</p>
	</div>
</div>
