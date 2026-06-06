import axios from 'axios';
// URL base del backend Spring Boot
const API_BASE_URL = 'http://localhost:8080/api';
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    timeout: 10000
});
// Interceptor de respuesta para manejo global de errores
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Error en la petición:', error);
        return Promise.reject(error);
    }
);
export default apiClient;
