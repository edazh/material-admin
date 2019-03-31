import { axios } from '@/plugins/axios'

const login = (data = {}) => {
  return axios.post('/user/login', data)
}

export { login }
