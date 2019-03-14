import axios from 'axios';

const API_URL = "http://0.0.0.0:8000"

var api = axios.create({
    baseURL:API_URL,
    timeout:5000
})

export default api;
