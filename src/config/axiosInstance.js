import axios from 'axios';

const api = axios.create({
  baseURL: 'https://69574200f7ea690182d191ac.mockapi.io/', // Base URL for all requests
  timeout: 5000,                      // Request timeout in ms
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
