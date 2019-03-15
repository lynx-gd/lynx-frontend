import axios from "axios";

const API_URL = "http://localhost:5000/";

var api = axios.create({
  baseURL: API_URL,
  timeout: 50000
});

export default api;
