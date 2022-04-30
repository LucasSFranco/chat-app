import axios from 'axios'

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_AUTH_URL!
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.error(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response.status === 400)
      return Promise.reject(error.response.data)
    console.error(error)
  }
)

export { api }
