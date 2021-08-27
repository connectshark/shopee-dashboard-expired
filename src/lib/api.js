import axios from 'axios'
import.meta.env

const api = axios.create({
  baseURL: import.meta.env.VITE_URL,
  timeout: 10000
})

export default api