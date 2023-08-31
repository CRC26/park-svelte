<script>
	import Header from '$lib/Header.svelte';
    import ParkList from '$lib/ParkList.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
</script>

<Header>
	<MainNavigator />
</Header>

<div class="columns">
	<div class="column has-text-centered">
		<img alt="fairy" src="/fairy.jpg" width="300" />
	</div>
	<div class="column box has-text-centered">
		<h1 class="title is-4">Parks added to date</h1>
		<ParkList />
	</div>
</div>