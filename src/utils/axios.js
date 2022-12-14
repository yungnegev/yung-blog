import axios from "axios";


export const apiUrl = 'https://blogio-backend-production.up.railway.app'

const instance = axios.create({
    baseURL: apiUrl
})

export default instance