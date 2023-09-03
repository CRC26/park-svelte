
<script>
  // @ts-nocheck
	import { onMount } from "svelte";
	import { parkService } from "../services/park-service"

  let parkName = "";
  let countyList = [];
	let selectedCounty = "";

	let userRating = ["1", "2", "3","4","5"];
	let selectedRating = "";
  let lat = "0";
  let lng = "0";
  let message = "Please add a park";

  onMount(async () => {
		countyList = await parkService.getCounties();
	});
  
  async function addPark(park) {
    if (parkName && selectedRating && selectedCounty) { 
      const countyNames = selectedCounty.split(",");
			const county = countyList.find((county) => county.countyFirst == countyNames[0] && county.countySecond == countyNames[1]);
      const park = {
				parkName: parkName,
				rating: selectedRating,
        lat: lat,
        lng: lng,
			};
			const success = await parkService.addPark(park);
      if (!success) {
				message = "park not completed - some error occurred";
				return;
			}
			message = `Thanks! You added ${parkName} to ${county.countyFirst} ${county.countySecond}`;
		} else {
			message = "Please complete the form";
		}
	}

</script>
<form on:submit|preventDefault={addPark}>
	<div class="field">
		<label class="label" for="parkName">Enter Park</label>
		<input bind:value={parkName} class="input" id="parkName" name="parkName" type="text" />
	</div>
  <div class="field">
    <div class="control">
      {#each userRating as rating}
        <input bind:group={selectedRating}  id="countyName" class="radio" type="radio" value={rating} /> {rating}
      {/each}
          </div>
      <div class="field">
        <label for="lat" class="label">Latitude</label>
        <input bind:value={lat} id="lat" class="input" type="text" placeholder="Enter Latitude" name="lat">
      </div>
      <div class="field">
        <label for="lng" class="label">Longitude</label>
        <input bind:value={lng} id="lng" class="input" type="text" placeholder="Enter Longitude" name="lng">
      </div>
      <div class="field">
        <div class="select">
          <select bind:value={selectedCounty}>
            {#each countyList as county}
              <option>{county.countyFirst},{county.countySecond} </option>
            {/each}
          </select>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link is light">Add Park</button>
        </div>
      </div>
  </form>
  <div class="box">
    {message}
  </div>

