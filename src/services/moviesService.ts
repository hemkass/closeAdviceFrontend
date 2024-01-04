import { Movie } from "@/models/movies/movie";
import { MoviesApi } from "@/api/movies/movieApi";

/**
 * Authentication Service.
 */

export const MoviesService = {
  async getMoviesFromTMDBByTitle(title: string): Promise<Movie> {
    return await MoviesApi.getMovieFromTmdbByTitle(title);
  },
};
