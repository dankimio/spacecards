import wretch from 'wretch'

const token = () => localStorage.getItem('token')

export default wretch()
  .auth(token() && `Bearer ${token()}`)
  .accept('application/json')
