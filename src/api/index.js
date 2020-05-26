import axios from 'axios';

export const API_BASE_URL = process.env.ROOT_API;

export default() => {
    return axios.create({
        baseURL: API_BASE_URL,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}
