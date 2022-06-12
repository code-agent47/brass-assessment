import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_SECRET_KEY}`
  }
});

export default instance;