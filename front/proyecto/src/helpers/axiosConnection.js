import axios from "axios";

const axiosConnection = axios.create({
    baseURL: "https://remo-digitalbooking.click",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
    }
})

export default axiosConnection;