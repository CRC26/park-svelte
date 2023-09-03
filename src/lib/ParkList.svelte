<script>
// @ts-nocheck

import { parkService } from "../services/park-service";
import { onMount } from "svelte";

let parkList = [];
onMount(async () =>{
     parkList = await parkService.getAllParks();
  })

</script>

<table class="table is-fullwidth">
    <thead>
        <th>Park Name</th>
        <th>Rating</th>
        <th>Latitude </th>
        <th>Longitude </th>
        <th>User</th>
        <th>County</th>
    </thead>
    <tbody>
     {#each parkList as park}
        <tr>
          <td> {park.parkName} </td>
          <td> {park.rating} </td>
          <td> {park.lat} </td>
          <td> {park.lng} </td>
          <td>
            {park.county.countyFirst},{park.county.countySecond}
         </td>
         <td>
            {park.user.lastName}, {park.user.firstName}
         </td>
        </tr>
     {/each}
    </tbody>
</table>