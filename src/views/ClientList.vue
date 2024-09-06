<template>
  <div>
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">Lista de Clientes</h2>
      <div class="mb-4 flex">
        <input
          v-model="filters.name"
          type="text"
          placeholder="Filtrar por nombre"
          class="p-2 border border-gray-300 rounded mr-2"
        />
        <input
          v-model="filters.documentId"
          type="text"
          placeholder="Filtrar por documento"
          class="p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        @click="showModal = true"
        class="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Agregar Cliente
      </button>
      <table class="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th class="border border-gray-300 p-2">ID</th>
            <th class="border border-gray-300 p-2">Nombre</th>
            <th class="border border-gray-300 p-2">Apellido</th>
            <th class="border border-gray-300 p-2">Documento</th>
            <th class="border border-gray-300 p-2">Correo</th>
            <th class="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in filteredClients" :key="client.id">
            <td class="border border-gray-300 p-2">{{ client.id }}</td>
            <td class="border border-gray-300 p-2">{{ client.firstName }}</td>
            <td class="border border-gray-300 p-2">{{ client.lastName }}</td>
            <td class="border border-gray-300 p-2">{{ client.documentId }}</td>
            <td class="border border-gray-300 p-2">{{ client.email }}</td>
            <td class="border border-gray-300 p-2">
              <button
                @click="editClient(client)"
                class="text-blue-500 hover:underline"
              >
                Editar
              </button>
              <button
                @click="deleteClient(client.id)"
                class="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <ClientModal
        :show="showModal"
        :client="selectedClient"
        @close="showModal = false"
        @save-client="handleSaveClient"
      />
    </div>
  </div>
</template>

<script>
import ClientModal from "@/components/ClientModal.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ClientModal,
  },
  data() {
    return {
      showModal: false,
      selectedClient: null,
      filters: {
        name: "",
        documentId: "",
      },
    };
  },
  computed: {
    ...mapGetters(["clients"]),
    filteredClients() {
      return this.clients.filter(
        (client) =>
          client.firstName
            .toLowerCase()
            .includes(this.filters.name.toLowerCase()) &&
          client.documentId.includes(this.filters.documentId)
      );
    },
  },
  methods: {
    ...mapActions(["fetchClients", "deleteClient"]),
    editClient(client) {
      this.selectedClient = { ...client };
      this.showModal = true;
    },
    handleSaveClient(client) {
      if (client.id) {
        // Update client
        this.$store.dispatch("updateClient", client);
      } else {
        // Add new client
        this.$store.dispatch("addClient", client);
      }
      this.showModal = false;
    },
  },
  created() {
    this.fetchClients();
  },
};
</script>
