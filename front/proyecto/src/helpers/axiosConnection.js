import axios from "axios";

const axiosConnection = axios.create({
    baseURL: "http://remo-digitalbooking-env-prod.eba-xby23mds.us-west-1.elasticbeanstalk.com/",
    headers: {
        "Content-type": "application/json"
    }
})

export default axiosConnection;


/* helloooo again again*/