import axios from "axios";


export const apiUrl = 'https://yungtest.site'

const instance = axios.create({
    baseURL: apiUrl
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})


export default instance