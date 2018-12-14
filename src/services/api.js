import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://test.bynd.com.br/api/v2',//teste
    baseURL: 'https://beta.bynd.com.br/api/v2',//producao
})

export default api;