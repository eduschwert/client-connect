import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://clientconnect-api.onrender.com',
  timeout: 5000,
});
