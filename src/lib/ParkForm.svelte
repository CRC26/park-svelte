
<script>
  // @ts-nocheck
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { parkService } from "../services/park-service"

  let parkName = "";
  let countyName = "";
  let lat = "";
  let lng = "";

  onMount(async () => {
    parkList = await parkService.getParks();
  });

  async function addPark() {
		if (parkName && parkCounty && lat && lng) {
      const success = await parkService.addPark(parkName, countyName, lat, lng)
      if (!success) {
        message = "Park not Added - some error occurred";
        return;
      }
      message = `Thanks! You added ${parkNmae} to the list`;
    } else {
      message = "Please fill out form";
    }
	}

</script>
<form on:submit|preventDefault={addPark}>
          <div class="field">
            <label for="parkName" class="label">Park Name</label>
            <input bind:value={parkName} id="parkName" class="input" type="text" placeholder="Enter park name" name="parkName">
          </div>
          <div class="field">
            <label for="countyName" class="label"> County </label>
            <input bind:value={countyName}  id="countyName" class="input" type="text" placeholder="Enter county name" name="countyName">
          </div>
      <div class="field">
        <label for="lat" class="label">Latitude</label>
        <input bind:value={lat} id="lat" class="input" type="number" placeholder="Enter Latitude" name="lat">
      </div>
      <div class="field">
        <label for="lng" class="label">Longitude</label>
        <input bind:value={lng} id="lng" class="input" type="number" placeholder="Enter Longitude" name="lng">
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link is light">Add Park</button>
        </div>
      </div>
  </form>

