import Axios from 'axios'

const axiosConfig = {
    baseURL: '',
    timeout: 10000,

}

const axios = Axios.create(axiosConfig)

export { axios }
