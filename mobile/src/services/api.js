import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.14.101.126:3334'
    
});

export default api;