import axios from 'axios';


const AppAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 100000,
});


export default AppAxiosInstance;