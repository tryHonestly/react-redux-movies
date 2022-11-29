import instance from '../axios'
import {
  AccountType,
  ToggleWatchListType,
  RateType,
  ToggleFavoriteListType,
} from '../types'
import { TMDB_tokensApi } from './TMDB_tokensApi'

export class TMDB_UserApi {

  static async getMe() {
    return await instance.get<AccountType>(`account`,)
  }

  static async authorization() {
    await TMDB_tokensApi.createAccessToken()
    return await instance.get<AccountType>(`account`,)
  }
  
  static async authentication() {
    await TMDB_tokensApi.createRequestToken()
  }

  static async toggleToWatchList(id: number, toggle: boolean) {
   const data = {
      media_type: 'movie',
      media_id: id,
      watchlist: toggle,
    }
   return await instance.post<ToggleWatchListType>(`account/id/watchlist`, data)
  }

  static async toggleToFavoriteList(id: number, toggle: boolean) {
    const data = {
      media_type: 'movie',
      media_id: id,
      favorite: toggle,
    }
    return await instance.post<ToggleFavoriteListType>( `account/id/favorite`, data)
  }

  static async rateMovie(id: number, value: number | null) {
    return await instance.post<RateType>(`movie/${id}/rating`, { value, })
  }
}
