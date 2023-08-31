<script>
	// @ts-nocheck
	import "leaflet/dist/leaflet.css";
	import { LeafletMap } from "../services/leaflet-map";
	import { onMount } from "svelte";
    import { parkService } from "../services/park-service";

	const mapConfig = {
		location: { lat: 52.160858, lng: -7.15242 },
		zoom: 8,
		minZoom: 1
	};

	onMount(async () => {
		const map = new LeafletMap("park-map", mapConfig);
        map.showZoomControl();
		map.showLayerControl();
		const parks = await parkService.getParks();
		parks.forEach((park) => {
			map.addMarker({ lat: park.lat, lng: park.lng });
		});
	});

	function addParkMarker(map, park) {
		const parkStr = `${park.candidate.parkName} ${park.candidate.countyName} €${park.rating.toString()}`;
		map.addMarker({ lat: park.lat, lng: park.lng }, parkStr);
	}
</script>

<div class="box" id="park-map" style="height:75vh" />