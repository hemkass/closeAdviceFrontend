<script setup lang="ts">
import { computed, watchEffect, ref } from "vue";
import { Movie } from "@/models/movies/movie";

interface MoviesProps {
  moviesList: Movie[];
}
const emit = defineEmits(["setMovie"]);

function saveMovie(movie) {
  emit("setMovie", movie);
}
const props = defineProps<MoviesProps>();

const list2 = ref<Movie[]>([]);
const list = computed(() => props.moviesList);
watchEffect(() => {
  list2.value = props.moviesList;
  list2.value.forEach((movie) => {
    if (movie.poster_path) {
      movie.url_image =
        "https://image.tmdb.org/t/p/original" + movie.poster_path;
    }
  });
});
</script>
<template>
  <v-card v-if="list2.length > 1" flat class="d-flex flex-column w-100">
    <v-card
      v-for="movie in list2"
      class="d-flex gap-y-6 my-3 mx-10 fullText red"
      @Click="saveMovie(movie)"
    >
      <v-card class="d-flex px-5" flat :height="200">
        <v-img
          v-if="movie.url_image"
          :height="400"
          :width="200"
          aspect-ratio="1"
          cover
          :src="movie.url_image"
        ></v-img
      ></v-card>

      <v-card flat class="d-flex flex-column px-5 w-100">
        <div class>
          <p>
            <span
              ><span class="text-h6 mx-1">titre:</span>
              <span class="text-body-1">
                {{ movie.original_title }}
              </span></span
            >
          </p>
          <p>
            <span
              ><span class="text-h6 mx-1">description:</span
              ><span class="text-body-1"> {{ movie.overview }}</span>
            </span>
          </p>
        </div>
      </v-card>
    </v-card>
  </v-card>
</template>
<style lang="scss">
.fullText {
  overflow: none;
}
</style>
