
<script>
  // @ts-nocheck
	import { goto } from "$app/navigation";
	import { parkService } from "../services/park-service"

  let parkName = "";
  let countyName = "";
  let lat = "";
  let lng = "";
  let errorMessage = "";

  async function addPark() {
      const park ={
        parkName: parkName,
        countyName: countyName,
        lat: lat,
        lng: lng,
      };
      const success = await parkService.addPark(park);
    if (success) {
      goto("/report");
    } else {
      errorMessage = "Error Trying to add Park";
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
        <input bind:value={lat} id="lat" class="input" type="text" placeholder="Enter Latitude" name="lat">
      </div>
      <div class="field">
        <label for="lng" class="label">Longitude</label>
        <input bind:value={lng} id="lng" class="input" type="lng" placeholder="Enter Longitude" name="lng">
      </div>
      <div class="field is-grouped">
        <button on:click={addPark(parkName, countyName, lat, lng)} class="button is-link">Add Park</button>
      </div>
  </form>
  {#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}

