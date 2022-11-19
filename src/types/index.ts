export type AccountType = {
  id: number
  username: string
}

export type RequestTokenType = {
  request_token: string
  status_code: number
  status_message: string
  success: boolean
}

export type AccessTokenType = {
  access_token: string
  account_id: string
  status_code: number
  status_message: string
  success: boolean
}

export type ToggleFavoriteListType = {
  status_code: number
  status_message: string
  success: boolean
}
export type ToggleWatchListType = {
  status_code: number
  status_message: string
  success: boolean
}

export type UserType = {
  id: number
  username: string
}

export type CastType = {
  cast_id: number
  character: string
  credit_id: string
  gender: number
  id: number
  name: string
  original_name: string
  profile_path: string
}

export type ProductionCountriesType = {
  name: string
}

export type MovieCreditsType = {
  id: number
  cast: CastType[]
}

export type ProductioncompanysType = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type MovieDetailType = {
  adult: boolean
  backdrop_path: string
  budget: number
  genres: GenreType[]
  homepage: string
  id: number
  imdb_id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductioncompanysType[]
  production_countries: ProductionCountriesType[]
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

export type GenreType = {
  id: number
  name: string
}

export type GenresListType = {
  genres: GenreType[]
}

export type FilterType = {
  with_genres: number[]
  primary_release_year: string
  sort_by: string
}

export type FetchingMoviesDataType = {
  page: number
  results: MovieType[]
  total_pages: number
}

export type MovieType = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
}

export type CategoryType = `upcoming` | `top_rated` | `popular`

export type RateType = {
  status_code: number
  status_message: string
  success: boolean
}
