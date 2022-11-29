import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_URL_v3 } from '../constants/api'
import { FetchingMoviesDataType, GenresListType, MovieDetailType, MovieCreditsType } from '../types'


type DiscoverMoviesListType = {
  page:number, 
  filterQueryString:string, 
  searchQueryString:string
}
type MoviesByCategorytType = {
  page:number, 
  category:string
}


export const TMBD_Api = createApi({
  reducerPath: 'TMBD_Api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL_v3, prepareHeaders:(headers, { getState }) => {
    headers.set('Authorization', `Bearer ${window.localStorage.getItem(`access_token`)}`)
    headers.set('Content-Type', 'application/json;charset=utf-8')
    return headers
  } }),
  endpoints: (builder) => ({
    getMoviesByCategory: builder.query<FetchingMoviesDataType, MoviesByCategorytType>({
      query: ({page, category}) => `movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`,
    }),
    getGenresList: builder.query<GenresListType, void>({
      query: () => `genre/movie/list?api_key=${API_KEY}&language=en-US`,
    }),
    getDiscoverMoviesList: builder.query<FetchingMoviesDataType, DiscoverMoviesListType >({
      query: ({page, filterQueryString, searchQueryString = ``}) => {
        if(searchQueryString){
          return `search/movie?api_key=${API_KEY}&language=en-US&query=${searchQueryString}&page=${page}`
        }else{
          return `discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&${filterQueryString}`
        }
      },
    }),
    getMovieDetails: builder.query<MovieDetailType, number>({
      query: (movie_id) => `movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
    }),
    getMovieCredits: builder.query<MovieCreditsType, number>({
      query: (movie_id) => `movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`,
    }),
    getSimilarMovies: builder.query<FetchingMoviesDataType, number>({
      query: (movie_id) => `movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
    }),
    getNowWatchingMovies: builder.query<FetchingMoviesDataType, void>({
      query: () => `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    }),
    getFavoritesMovies: builder.query<FetchingMoviesDataType, number>({
      query: (page) => `account/id/favorite/movies?page=${page}`,
      keepUnusedDataFor : 0
    }),
    getWatchListMovies: builder.query<FetchingMoviesDataType, number>({
      query: (page) => `account/id/watchlist/movies?page=${page}`,
      keepUnusedDataFor : 0
    }),
           
  }),
})

export const { 
  useGetMoviesByCategoryQuery, 
  useGetGenresListQuery, 
  useGetDiscoverMoviesListQuery, 
  useGetMovieDetailsQuery,
  useGetMovieCreditsQuery,
  useGetSimilarMoviesQuery,
  useGetNowWatchingMoviesQuery,
  useGetFavoritesMoviesQuery,
  useGetWatchListMoviesQuery,
 } = TMBD_Api