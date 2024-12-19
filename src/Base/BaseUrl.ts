
import axios from "axios";
// export const baseURL = 'https://localhost:3000'
export const baseURL = 'https://islamic-courses.vercel.app'
const BaseUrl = axios.create({baseURL})

export default BaseUrl;