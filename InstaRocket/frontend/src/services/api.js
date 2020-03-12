import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.17.187.225:3333',
});

export default api;