import wretch from 'wretch'
import { app } from 'packs/application'

export default wretch()
  .defer((w, url, options) => {
    if (url === '/users/sign_in' || url === '/users') {
      return w
    }

    const token = localStorage.getItem('token')
    return w.auth(`Bearer ${token}`)
  })
  .accept('application/json')
  .errorType('json')
  .catcher(401, (error, request) => {
    if (request._url === '/users/sign_in') {
      throw error
    }

    app.$store.dispatch('users/logOut')
    app.$router.push({ name: 'signin' })
  })
