<script>
// @ts-nocheck

	import Header from '$lib/Header.svelte';
	import AddParkForm from '$lib/AddParkForm.svelte';
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
		<AddParkForm />
	</div>
</div>