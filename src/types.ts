export interface MediaListResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface MediaBase {
  id: number;
  backdrop_path: string | null;
  overview: string;
  poster_path: string | null;
  vote_average: number;
}
export interface MovieBase extends MediaBase {
  title: string;
  release_date: string;
}

export interface TvBase extends MediaBase {
  name: string;
  first_air_date: string;
}
export interface MovieListItem extends MovieBase {
  genre_ids: number[];
}
export interface TvListItem extends TvBase {
  genre_ids: number[];
}
export interface MixedMovie extends MovieListItem {
  media_type: "movie";
}
export interface MixedTv extends TvListItem {
  media_type: "tv";
}
export type MultiSearch = MixedMovie | MixedTv | MixedPerson;

export interface MovieDetails extends MovieBase {
  runtime: number | null;
  tagline: string;
  genres: Genre[];
}
export interface TvDetails extends TvBase {
  tagline: string;
  genres: Genre[];
  number_of_episodes: number;
  number_of_seasons: number;
}
export interface Genre {
  id: number;
  name: string;
}

export interface CreditsResponse {
  cast: Cast[];
  crew: Crew[];
}
export interface PersonDetailsResponse extends PersonBase {
  birthday: string | null;
  biography: string;
  place_of_birth: string | null;
}

export interface PersonBase {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string | null;
}
export interface Cast extends PersonBase {
  character: string;
}
export interface Crew extends PersonBase {
  job: string;
  department: string;
}
export interface MixedPerson extends PersonBase {
  media_type: "person";
}
