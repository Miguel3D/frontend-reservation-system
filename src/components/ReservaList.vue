<template>
  <div>
    <h2>Lista de Reservas</h2>
    <ul>
      <li v-for="reserva in reservas" :key="reserva.id">
        {{ reserva.fecha }} - Cliente: {{ reserva.clienteId }} - Servicio:
        {{ reserva.servicioId }}
        <button @click="cancelarReserva(reserva.id)">Cancelar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import reservasService from "../services/reservasService";

export default {
  data() {
    return {
      reservas: [],
    };
  },
  async created() {
    this.obtenerReservas();
  },
  methods: {
    async obtenerReservas() {
      try {
        const response = await reservasService.obtenerReservas();
        this.reservas = response.data;
      } catch (error) {
        console.error("Error al obtener reservas:", error);
      }
    },
    async cancelarReserva(id) {
      try {
        await reservasService.cancelarReserva(id);
        this.obtenerReservas();
      } catch (error) {
        console.error("Error al cancelar reserva:", error);
      }
    },
  },
};
</script>
