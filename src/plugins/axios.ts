import Axios from 'axios'

const axiosConfig = {
    baseURL: '/api',
    timeout: 10000,
}

const axios = Axios.create(axiosConfig)

// axios.interceptors.request.use((config) => {

//     return config
// })

axios.interceptors.response.use(
    (response) => {
        const { code, message, data } = response.data
        switch (code) {
            case 200:
                return data
                break
            case 401:
                createError(`[ code: ${code} ] ${message} from ${response.config.url}`)
                break
            default:
                createError(`[ code: ${code} ] ${message} from ${response.config.url}`)
                break
        }
    },
    (error) => {

        return error
    },
)

const createError = (msg: string) => {
    const err = new Error(msg)
    throw err
}

export { axios }
