import axios from "axios";

const axiosInstance = axios.create({
    baseUrl: 'http://localhost:8000/api',
    headers: {
        'Content-type': 'application/json'
    }
});

export default axiosInstance;