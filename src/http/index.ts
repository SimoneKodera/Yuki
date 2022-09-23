import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9090';

axios.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err)
);

export default axios;