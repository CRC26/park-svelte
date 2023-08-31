<script>
	import { beforeUpdate } from "svelte";
	import { parkService } from "./services/park-service";

	beforeUpdate(() => {
		parkService.reload();
	});
</script>

<div class="container">
	<slot />
</div>