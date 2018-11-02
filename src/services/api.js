import axios from 'axios';

const api = axios.create({
    baseURL: 'https://test.bynd.com.br/api/v2',
})

export default api;