<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
  >
    <div class="bg-white p-4 rounded shadow-lg">
      <h3 class="text-lg font-bold mb-4">
        {{ localReservation?.id ? "Editar Reserva" : "Agregar Reserva" }}
      </h3>
      <form @submit.prevent="saveReservation">
        <label class="block mb-2">
          Fecha:
          <input
            v-model="localReservation.date"
            type="date"
            class="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label class="block mb-2">
          ID Cliente:
          <input
            v-model="localReservation.clientId"
            type="number"
            class="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label class="block mb-2">
          ID Servicio:
          <input
            v-model="localReservation.serviceId"
            type="number"
            class="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <div class="flex justify-end mt-4">
          <button
            @click="$emit('close')"
            class="bg-gray-300 text-white p-2 rounded mr-2"
          >
            Cancelar
          </button>
          <button type="submit" class="bg-blue-500 text-white p-2 rounded">
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    reservation: Object,
  },
  data() {
    return {
      localReservation: { ...this.reservation },
    };
  },
  watch: {
    reservation: {
      handler(newReservation) {
        this.localReservation = { ...newReservation };
      },
      deep: true,
    },
  },
  methods: {
    saveReservation() {
      this.$emit("save-reservation", this.localReservation);
    },
  },
};
</script>
