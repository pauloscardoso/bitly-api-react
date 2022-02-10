import axios from 'axios';

export const key = "ad531991bfee4d6a64878138153c1bf2fe29f30e"

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers:{
    'Authorization': `Bearer ${key}`
  }
})

export default api;
