import axios from 'axios';

const instance = axios.create({
  baseURL: `${window.location.href}.netlify/functions/cors/https://api.paystack.co/`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_SECRET_KEY}`
  }
});

export default instance;