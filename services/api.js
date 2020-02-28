import axios from "axios";
import base64 from 'react-native-base64';
const authHeader = 'Basic ' + base64.encode('seguranca.dstn@gmail.com:bynd2019');
const url = 'https://app.bynd.com.br/api/v2'
const devUrl = 'http://localhost:8000/api/v2'
const api = axios.create({
		baseURL: url,
		headers:{
			Authorization: authHeader
		}
})

export const validatePlate = async (plate) =>  {
	return await api.get('/pvl/validate?plate=' + plate)
}

export const fetchAutoCompletePlate = async (plate) =>  {
	return await api.get('/pvl/plates?plate=' + plate)
}
