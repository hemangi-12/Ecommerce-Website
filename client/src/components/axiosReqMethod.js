import axios from 'axios';

export const userRequest = axios.create({
  BASE_URL: 'http://localhost:8005', // your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});
