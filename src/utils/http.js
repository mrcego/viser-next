import axios from 'axios'
import auth from '@/utils/auth'

export const endpointURL = 'https://api.tissini.app'
// process.env.NODE_ENV === 'production'
//   ? 'https://api.tissini.app'
//   : 'https://dev.tissini.app'

export const OCTOPLUS_TOKEN = 'e550a67b-31f5-4b11-ba04-bca56013accb'

export const cancelTokenSources = new Map()

export const http = axios.create({
  baseURL: endpointURL + '/api/v1/'
})

export const httpv2 = axios.create({
  baseURL: endpointURL + '/api/v2/'
})

http.interceptors.request.use(
  async request => {
    let { response: token } = await auth

    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`
    } else {
      this.$store.dispatch('logout')
      this.$router.push('/', () => {})
    }

    return request
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        this.$store.dispatch('logout')
        this.$router.push('/', () => {})
      }

      if (
        Object.prototype.hasOwnProperty.call(error.config, 'errorHandle') &&
        error.config.errorHandle === false
      ) {
        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }
)

httpv2.interceptors.request.use(
  request => {
    // let { response: token } = await auth

    // if (!!token) {
    //   request.headers['Authorization'] = `Bearer ${token}`
    // } else {
    //   this.$store.dispatch('logout')
    //   this.$router.push('/', () => {})
    // }

    if (!Object.prototype.hasOwnProperty.call(request, 'cancelToken')) {
      const source = axios.CancelToken.source()

      cancelTokenSources.set(source.token, source.cancel) // join the cancel queue
      request.cancelToken = source.token
    }

    return request
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        this.$store.dispatch('logout')
        this.$router.push('/', () => {})
      }

      if (
        Object.prototype.hasOwnProperty.call(error.config, 'errorHandle') &&
        error.config.errorHandle === false
      ) {
        return Promise.reject(error)
      }
    } else {
      if (axios.isCancel(error)) {
        cancelTokenSources.delete(error.message)
      }
    }

    return Promise.reject(error)
  }
)
