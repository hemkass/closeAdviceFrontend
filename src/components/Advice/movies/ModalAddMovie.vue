<script setup lang="ts">
import { ref } from "vue";
import { MoviesService } from "@/services/moviesService";
import TmdbTable from "@/components/Advice/movies/TmdbTable.vue";
import { Movie } from "@/models/movies/movie";
const dialog = ref<boolean>(false);
const dialogm1 = ref<string>("");
const moviesList = ref<Movie[]>([]);
const getMovies = async (event: string) => {
  const getMovies = await MoviesService.getMoviesFromTMDBByTitle(event);
  moviesList.value = getMovies.results;
};
function setMovie(movie: Movie) {
  console.log("my movie here", movie);
}
</script>
<template>
  <v-row justify="start">
    <v-dialog v-model="dialog" scrollable width="auto">
      <template v-slot:activator="{ props }">
        <v-card
          height="100"
          class="d-flex justify-start align-center red mx-3 w-100"
        >
          <v-btn color="primary" confortable v-bind="props">
            {{ $t("movies.addMovie") }}
          </v-btn>
        </v-card>
      </template>
      <v-card class="red">
        <v-card-title> {{ $t("movies.addMovie") }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="fullText">
          <v-text-field
            height="107px"
            class="blue fullText"
            label="search"
            @change="(event) => getMovies(event.target.value)"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        <TmdbTable
          :moviesList="moviesList"
          @setMovie="
            (movie) => {
              setMovie(movie);
            }
          "
        ></TmdbTable>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style lang="scss">
.searchBar {
  height: 100px;
  background-color: green;
}
</style>
