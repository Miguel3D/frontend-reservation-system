<template>
  <div class="container mx-auto text-center py-20">
    <h2 class="text-4xl font-bold mb-4">404 - Página no encontrada</h2>
    <p class="text-lg">
      La página que buscas no existe. Regresa a la
      <router-link to="/" class="text-blue-500 hover:underline"
        >página de inicio</router-link
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
/* Estilos específicos para la página 404 */
</style>
