import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-reservation-system-production.up.railway.app/",
});

export default api;
