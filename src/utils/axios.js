import axios from "axios";

const instance = axios.create({
    baseURL: 'https://blogio-backend-production.up.railway.app/'
})

export default instance