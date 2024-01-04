import { TMBDConfig, defaultConfig } from "@/api/http/httpConfig";
import { HttpClient } from "@/api/http/httpClient";
import { baseUrl_movies } from "@/api/baseUrl";
import { Movie } from "@/models/movies/movie";

/**
 *
 * Authentication Api.
 */
export const MoviesApi = {
  async getMovieFromTmdbByTitle(title: any): Promise<Array<Movie>> {
    console.log("hello", import.meta.env.VITE_tmdb_token);
    const moviesList = await HttpClient.get(
      `${baseUrl_movies}/3/search/movie?api_key=${
        import.meta.env.VITE_TMDB_ApiKey
      }&query=${title}&language=fr-FR&page=1'`,
      TMBDConfig
    );
    console.log("list", moviesList, "data", moviesList.data);
    return moviesList.data;
  },
};
