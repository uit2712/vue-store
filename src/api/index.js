import axios from 'axios';

export const API_BASE_URL = process.env.VUE_APP_ROOT_API;
console.log(API_BASE_URL);

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
