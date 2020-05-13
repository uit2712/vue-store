import axios from 'axios';

export const API_BASE_URL = 'http://my-shop-api.somee.com/api';

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
