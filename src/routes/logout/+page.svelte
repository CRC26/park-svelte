<script>
	import { goto } from "$app/navigation";
	import { parkService } from "../../services/park-service";

	parkService.logout();
	goto("/");
</script>