import { createStore } from "vuex";
import api from "@/api"; // Asegúrate de que esta ruta sea correcta

export default createStore({
  state: {
    clients: [],
    reservations: [],
  },
  mutations: {
    SET_CLIENTS(state, clients) {
      state.clients = clients;
    },
    SET_RESERVATIONS(state, reservations) {
      state.reservations = reservations;
    },
    ADD_CLIENT(state, client) {
      state.clients.push(client);
    },
    UPDATE_CLIENT(state, updatedClient) {
      const index = state.clients.findIndex(
        (client) => client.id === updatedClient.id
      );
      if (index !== -1) {
        state.clients.splice(index, 1, updatedClient);
      }
    },
    DELETE_CLIENT(state, clientId) {
      state.clients = state.clients.filter((client) => client.id !== clientId);
    },
    ADD_RESERVATION(state, reservation) {
      state.reservations.push(reservation);
    },
    UPDATE_RESERVATION(state, updatedReservation) {
      const index = state.reservations.findIndex(
        (reservation) => reservation.id === updatedReservation.id
      );
      if (index !== -1) {
        state.reservations.splice(index, 1, updatedReservation);
      }
    },
    DELETE_RESERVATION(state, reservationId) {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== reservationId
      );
    },
  },
  actions: {
    async fetchClients({ commit }) {
      const response = await api.get("/clients");
      commit("SET_CLIENTS", response.data);
    },
    async fetchReservations({ commit }) {
      const response = await api.get("/reservations");
      commit("SET_RESERVATIONS", response.data);
    },
    async addClient({ commit }, client) {
      const response = await api.post("/clients", client);
      commit("ADD_CLIENT", response.data);
    },
    async updateClient({ commit }, client) {
      const response = await api.put(`/clients/${client.id}`, client);
      commit("UPDATE_CLIENT", response.data);
    },
    async deleteClient({ commit }, clientId) {
      await api.delete(`/clients/${clientId}`);
      commit("DELETE_CLIENT", clientId);
    },
    async addReservation({ commit }, reservation) {
      const response = await api.post("/reservations", reservation);
      commit("ADD_RESERVATION", response.data);
    },
    async updateReservation({ commit }, reservation) {
      const response = await api.put(
        `/reservations/${reservation.id}`,
        reservation
      );
      commit("UPDATE_RESERVATION", response.data);
    },
    async deleteReservation({ commit }, reservationId) {
      await api.delete(`/reservations/${reservationId}`);
      commit("DELETE_RESERVATION", reservationId);
    },
  },
  getters: {
    clients: (state) => state.clients,
    reservations: (state) => state.reservations,
  },
});
