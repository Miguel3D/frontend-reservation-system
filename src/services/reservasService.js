import apiClient from "./axios";

export default {
  // Crear una nueva reserva
  async createReserva(data) {
    return apiClient.post("/reservas", data);
  },

  // Modificar una reserva existente
  async modificarReserva(id, data) {
    return apiClient.put(`/reservas/${id}`, data);
  },

  // Cancelar una reserva
  async cancelarReserva(id) {
    return apiClient.delete(`/reservas/${id}`);
  },

  // Obtener reservas con filtros opcionales
  async obtenerReservas(filtros) {
    return apiClient.get("/reservas", { params: filtros });
  },
};
