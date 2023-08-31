<script>
// @ts-nocheck

	import { beforeUpdate } from "svelte";
	import Header from "$lib/Header.svelte";
	import MainNavigator from "$lib/MainNavigator.svelte";
	import ParkMap from "$lib/ParkMap.svelte";
	import { parkService } from "../../services/park-service";

	beforeUpdate(() => {
		parkService.checkPageRefresh();
	});
</script>

<Header>
	<MainNavigator />
</Header>

<ParkMap />