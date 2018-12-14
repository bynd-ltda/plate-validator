import axios from 'axios';

const apiTeste = axios.create({
     baseURL: 'https://test.bynd.com.br/api/v2',
})

export default apiTeste;