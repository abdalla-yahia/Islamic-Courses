
import axios from "axios";
export const baseURL = 'https://islamic-courses.vercel.app/moshaf'
const BaseUrl = axios.create({baseURL})

export default BaseUrl;