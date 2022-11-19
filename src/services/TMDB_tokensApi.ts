import axios, { AxiosResponse } from 'axios'
import { API_URL_v4, API_V4_KEY } from '../constants/api'
import { AccessTokenType, RequestTokenType } from '../types'

export class TMDB_tokensApi {

  static async createRequestToken(): Promise<AxiosResponse<RequestTokenType>> {
    const redirect_to = window.location.href
    const { data } =  await axios({
      url: `${API_URL_v4}/auth/request_token`,
      method: `POST`,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${API_V4_KEY}`,
      },
      data: {
        redirect_to,
      },
    })
    window.localStorage.setItem(`request_token`, data.request_token)
    window.location.assign(`https://www.themoviedb.org/auth/access?request_token=${data.request_token}`)
    return data
    
  }


  static async createAccessToken(): Promise<AxiosResponse<AccessTokenType>> {
    const request_token = window.localStorage.getItem(`request_token`)
      const { data } = await axios({
      url: `${API_URL_v4}/auth/access_token`,
      method: `POST`,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${API_V4_KEY}`,
      },
      data: {
        request_token ,
      },
    })
    window.localStorage.setItem(`access_token`, data.access_token)
    return data
  }

  static async deleteAccessToken() {
    await axios({
      url: `${API_URL_v4}/auth/access_token`,
      method: `DELETE`,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${window.localStorage.getItem(`access_token`)}`,
      },
      data: {
        access_token: `${window.localStorage.getItem(`access_token`)}`,
      },
    })
  }
}
