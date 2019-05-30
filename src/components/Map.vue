<template>
    <div class="row map">
      <l-map :zoom="zoom" :center="location">
      <l-tile-layer :url="url" ></l-tile-layer>
      <l-marker :lat-lng="location" ></l-marker>
      </l-map>
      <p>Location: {{location}}</p>
    </div>
</template>

<script>
// check out https://jsfiddle.net/Boumi/k04zpLx9/
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { mapState } from 'vuex'

export default {
    name: 'Map',
    components: {
        LMap,
        LTileLayer,
        LMarker
    },props:{
      location:Array
    },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 10
    }
  }

}
</script>

<style>
    .map {
        height: 60vh;

    }
</style>
