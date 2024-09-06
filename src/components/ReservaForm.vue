<template>
  <div>
    <p class="text-red-500 text-3xl mb-5">Crear Reserva</p>
    <form @submit.prevent="submitReserva">
      <div>
        <label for="fecha">Fecha:</label>
        <input
          v-model="reserva.fecha"
          type="datetime-local"
          id="fecha"
          required
        />
      </div>
      <div>
        <label for="nombre">Nombre:</label>
        <input v-model="cliente.nombre" type="text" id="nombre" required />
      </div>
      <div>
        <label for="apellido">Apellido:</label>
        <input v-model="cliente.apellido" type="text" id="apellido" required />
      </div>
      <div>
        <label for="telefono">Teléfono:</label>
        <input v-model="cliente.telefono" type="text" id="telefono" required />
      </div>
      <div>
        <label for="correo">Correo:</label>
        <input v-model="cliente.correo" type="email" id="correo" required />
      </div>
      <div>
        <label for="servicioId">Servicio:</label>
        <input
          v-model.number="reserva.servicioId"
          type="number"
          id="servicioId"
          required
        />
      </div>
      <button type="submit">Crear Reserva</button>
    </form>
  </div>
</template>

<script>
import reservaService from "../services/reservasService";

export default {
  data() {
    return {
      reserva: {
        fecha: "",
        servicioId: 0,
      },
      cliente: {
        nombre: "Mario",
        apellido: "Castellanos",
        telefono: "3118992222",
        correo: "mario_g@gmail.com",
      },
    };
  },
  methods: {
    async submitReserva() {
      try {
        const data = {
          fecha: this.reserva.fecha,
          cliente: this.cliente,
          servicioId: this.reserva.servicioId,
        };
        await reservaService.createReserva(data);
        alert("Reserva creada con éxito");

        this.reserva = { fecha: "", servicioId: 0 };
        this.cliente = { nombre: "", apellido: "", telefono: "", correo: "" };
      } catch (error) {
        alert("Error al crear reserva");
      }
    },
  },
};
</script>
