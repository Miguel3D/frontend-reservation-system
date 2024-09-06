<template>
  <div id="app" class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Sistema de Reservas</h1>
        <nav>
          <router-link to="/" class="text-white hover:underline">
            Inicio</router-link
          >
          <router-link to="/clients" class="ml-4 text-white hover:underline">
            Clientes</router-link
          >
          <router-link
            to="/reservations"
            class="ml-4 text-white hover:underline"
          >
            Reservas</router-link
          >
        </nav>
      </div>
    </header>
    <main class="flex-grow p-4">
      <router-view />
    </main>
    <footer class="bg-gray-800 text-white p-4 text-center">
      © 2024 Sistema de Reservas
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
