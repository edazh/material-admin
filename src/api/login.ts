import { axios } from '@/plugins/axios'
import { Response } from './intreface'

const login = <T>(data = {}) => {
    return axios.post<Response<T>>('/user/login', data)
}

export {
    login,
}
