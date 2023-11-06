import axios from "axios";

import {accessToken, baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(request => {
    const token = accessToken;
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export {
    axiosService
}