import axios from "axios";

const instance = axios.create({
    
    baseURL: 'http://192.168.43.252:3001/'
    // baseURL: 'http://192.168.0.122:3001/'
});
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;

