import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL
})

api.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('access_token')

    if (accessToken)
      config.headers = { ...config.headers, authorization: `Bearer ${accessToken}` }

    return config
  },
  (error) => {
    // TODO: Notify user he can't connect to the server
    console.error(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.status === 400)
      return Promise.reject(error)

    // TODO: Treat when status is 401, try to get access token using refresh token otherwise redirect to login page
    // TODO: Notify user that an unexpected error occurred
    console.error(error)
  }
)

export { api }
