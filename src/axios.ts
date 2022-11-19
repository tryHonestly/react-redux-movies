import axios from "axios";



const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`
})

instance.interceptors.request.use((config) => {

  config.headers!.Authorization = `Bearer ${window.localStorage.getItem(`access_token`)}`
  config.headers!['Content-Type'] ='application/json;charset=utf-8'
  return config
})

export default instance