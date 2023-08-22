import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';
// const API_BASE_URL = 'https://api.farma.tsi.pro.br'; 

export const getLos = () => {
    return axios.get(`${API_BASE_URL}/api/los`);
};

export const createLo = (newLoData: any) => {
    return axios.post(`${API_BASE_URL}/api/los`, newLoData);
};

export const updateLo = (loId: any, updatedLoData: any) => {
    return axios.put(`${API_BASE_URL}/api/los/${loId}`, updatedLoData);
};

export const deleteLo = (loId: any) => {
    return axios.delete(`${API_BASE_URL}/api/los/${loId}`);
};