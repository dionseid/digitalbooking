import axios from "axios";

const axiosConnection = axios.create({
    baseURL: "http://localhost:8080",
    headers: {}
})

export default axiosConnection;