import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CRM_API_URL || 'https://solve-magic-maths-crm-node.onrender.com'}/api`,
  timeout: 10000,
})

export default api
