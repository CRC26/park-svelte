<script>
	import Header from '$lib/Header.svelte';
	import ParkForm from '$lib/ParkForm.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
</script>

<Header>
	<MainNavigator />
</Header>

<div class="columns is-vcentered">
	<div class="column has-text-centered">
		<img alt="climb" src="/climb.jpg" width="300" />
	</div>
	<div class="column box has-text-centered">
		<h1 class="title is-4">Add a Park</h1>
		<ParkForm/>
	</div>
</div>