export interface Movie {
  id?: number;
  idIMBD?: number | null;
  original_language: string;
  original_title: string | null;
  overview?: string | null;
  posterPath?: string | null;
  releaseDate?: Date | null;
  viewDate?: Date | null;
  review?: string | null;
  rating?: number | null;
  url_image: string | null | undefined;
  poster_path?: string | null;
}
