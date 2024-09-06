<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
  >
    <div class="bg-white p-4 rounded shadow-lg">
      <h3 class="text-lg font-bold mb-4">
        {{ localClient?.id ? "Editar Cliente" : "Agregar Cliente" }}
      </h3>
      <form @submit.prevent="saveClient">
        <label class="block mb-2">
          Nombre:
          <input
            v-model="localClient.firstName"
            type="text"
            class="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label class="block mb-2">
          Apellido:
          <input
            v-model="localClient.lastName"
            type="text"
            class="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label class="block mb-2">
          Documento:
          <input
            v-model="localClient.documentId"
            type="text"
            class="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label class="block mb-2">
          Correo:
          <input
            v-model="localClient.email"
            type="email"
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
    client: Object,
  },
  data() {
    return {
      localClient: { ...this.client },
    };
  },
  watch: {
    client: {
      handler(newClient) {
        this.localClient = { ...newClient };
      },
      deep: true,
    },
  },
  methods: {
    saveClient() {
      this.$emit("save-client", this.localClient);
    },
  },
};
</script>
