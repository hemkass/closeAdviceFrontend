<script setup lang="ts">
import MoviesList from "@/components/Advice/movies/MoviesList.vue";
import AddMovie from "@/components/Advice/movies/AddMovie.vue";
import ModalAddMovie from "@/components/Advice/movies/ModalAddMovie.vue";
</script>
<template>
  <v-card flat class="d-flex flex-column yellow px-10">
    <div><MoviesList /></div>
  </v-card>
</template>
<style lang="scss">
.blue {
  background-color: blue;
}
.red {
  background-color: red;
}
.yellow {
  background-color: yellow;
}
</style>
