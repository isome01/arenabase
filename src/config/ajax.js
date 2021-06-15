import axios from 'axios/index'

const isProduction = process.env.NODE_ENV === 'production'
const backendUrl = isProduction
  ? (`${process.env.BACKEND_PROTOCOL}://${process.env.BACKEND_PROD_URL}`)
  : `${process.env.BACKEND_PROTOCOL || '0.0.0.0'}://${process.env.BACKEND_DOMAIN ||
  '0.0.0.0'}:${process.env.BACKEND_PORT || 5001}`

const ajax = axios.create({
  baseURL: backendUrl,
  timeout: 8000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  }
})

export default ajax