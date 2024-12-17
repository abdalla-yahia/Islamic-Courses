
import axios from "axios";
export const baseURL = 'http://localhost:3000'
const BaseUrl = axios.create({baseURL})

export default BaseUrl;