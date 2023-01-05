import axios from "axios";


export const apiUrl = 'http://45.95.234.147'

const instance = axios.create({
    baseURL: apiUrl
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})


export default instance