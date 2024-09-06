import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://backend-reservation-system-production.up.railway.app/",
});

export default apiClient;
