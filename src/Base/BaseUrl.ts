
import axios from "axios";
// export const baseURL = 'https://islamic-courses.vercel.app/moshaf'
export const baseURL = 'https://localhost:3000'
const BaseUrl = axios.create({baseURL})

export default BaseUrl;