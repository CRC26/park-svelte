<script>
// @ts-nocheck

import { parkService } from "../services/park-service";
  import { onMount } from "svelte";


  let parkList = [];
  onMount(async () =>{
     parkList = await parkService.getParks();
  })


</script>
<table class="table is-fullwidth">
    <thead>
       <th>Park Name</th>
        <th>County Name</th>
        <th>Latitude </th>
        <th>Longitude </th>
    </thead>
    <tbody>
     {#each parkList as park}
        <tr>
          <td> {park} </td>
        </tr>
     {/each}
    </tbody>
</table>