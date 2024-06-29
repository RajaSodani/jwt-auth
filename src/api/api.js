import axios from 'axios';

// Create an axios instance
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await api.post('/auth/login', userData);
        // console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;
