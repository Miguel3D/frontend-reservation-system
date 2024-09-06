<template>
  <div>
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">Lista de Reservas</h2>
      <div class="mb-4 flex">
        <input
          v-model="filters.date"
          type="date"
          class="p-2 border border-gray-300 rounded mr-2"
        />
        <input
          v-model="filters.clientId"
          type="number"
          placeholder="Filtrar por ID Cliente"
          class="p-2 border border-gray-300 rounded"
        />
        <input
          v-model="filters.serviceId"
          type="number"
          placeholder="Filtrar por ID Servicio"
          class="p-2 border border-gray-300 rounded ml-2"
        />
      </div>
      <button
        @click="showModal = true"
        class="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Agregar Reserva
      </button>
      <table class="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th class="border border-gray-300 p-2">ID</th>
            <th class="border border-gray-300 p-2">Fecha</th>
            <th class="border border-gray-300 p-2">ID Cliente</th>
            <th class="border border-gray-300 p-2">ID Servicio</th>
            <th class="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reservation in filteredReservations" :key="reservation.id">
            <td class="border border-gray-300 p-2">{{ reservation.id }}</td>
            <td class="border border-gray-300 p-2">{{ reservation.date }}</td>
            <td class="border border-gray-300 p-2">
              {{ reservation.clientId }}
            </td>
            <td class="border border-gray-300 p-2">
              {{ reservation.serviceId }}
            </td>
            <td class="border border-gray-300 p-2">
              <button
                @click="editReservation(reservation)"
                class="text-blue-500 hover:underline"
              >
                Editar
              </button>
              <button
                @click="deleteReservation(reservation.id)"
                class="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <ReservationModal
        :show="showModal"
        :reservation="selectedReservation"
        @close="showModal = false"
        @save-reservation="handleSaveReservation"
      />
    </div>
  </div>
</template>

<script>
import ReservationModal from "@/components/ReservationModal.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ReservationModal,
  },
  data() {
    return {
      showModal: false,
      selectedReservation: null,
      filters: {
        date: "",
        clientId: "",
        serviceId: "",
      },
    };
  },
  computed: {
    ...mapGetters(["reservations"]),
    filteredReservations() {
      return this.reservations.filter(
        (reservation) =>
          (!this.filters.date ||
            reservation.date.startsWith(this.filters.date)) &&
          (!this.filters.clientId ||
            reservation.clientId == this.filters.clientId) &&
          (!this.filters.serviceId ||
            reservation.serviceId == this.filters.serviceId)
      );
    },
  },
  methods: {
    ...mapActions(["fetchReservations", "deleteReservation"]),
    editReservation(reservation) {
      this.selectedReservation = { ...reservation };
      this.showModal = true;
    },
    handleSaveReservation(reservation) {
      if (reservation.id) {
        // Update reservation
        this.$store.dispatch("updateReservation", reservation);
      } else {
        // Add new reservation
        this.$store.dispatch("addReservation", reservation);
      }
      this.showModal = false;
    },
  },
  created() {
    this.fetchReservations();
  },
};
</script>
