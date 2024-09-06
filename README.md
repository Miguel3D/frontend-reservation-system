# Frontend del Sistema de Reservas

Este proyecto es la interfaz de usuario del Sistema de Reservas, desarrollado con Vue.js y Tailwind CSS. Permite a los usuarios gestionar reservas, incluyendo la creación, modificación, cancelación y visualización de reservas.

## Requisitos

- Node.js (versión recomendada: 18.x o superior)
- npm (versión recomendada: 9.x o superior)

## Instalación y Configuración

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/Miguel3D/frontend-reservation-system
   cd frontend-reservation-system
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Inicia la aplicación**

   ```bash
   npm run serve
   ```

   La aplicación debería estar corriendo en `http://localhost:8080`.

## Estructura del Proyecto

- **`src/components/`**: Componentes de Vue.js utilizados en la aplicación.

  - `ReservationList.vue`: Componente para visualizar y gestionar reservas.
  - `ReservationForm.vue`: Componente para crear y editar reservas.
  - `ReservationFilter.vue`: Componente para filtrar las reservas.

- **`src/services/api.js`**: Servicio para manejar las peticiones a la API del backend.

- **`src/store/index.js`**: Configuración de Vuex para el estado global de la aplicación.

- **`src/App.vue`**: Componente principal de la aplicación.

- **`src/main.js`**: Punto de entrada de la aplicación Vue.

## Uso

- **Realizar una reserva**: Completa el formulario en el componente `ReservationForm.vue` para crear una nueva reserva.

- **Modificar una reserva**: Usa el componente `ReservationList.vue` para seleccionar una reserva existente y actualízala utilizando el formulario de edición.

- **Cancelar una reserva**: Elimina una reserva desde el componente `ReservationList.vue`.

- **Visualización de reservas**: Consulta todas las reservas y utiliza el componente `ReservationFilter.vue` para buscar por fecha, ID de cliente, o ID de servicio.

## Contacto

Para cualquier pregunta o consulta, puedes contactar a:

- **Nombre**: Miguel Angel Moreno Rivas
- **Correo Electrónico**: [miguel.amorenori@gmail.com](mailto:miguel.amorenori@gmail.com)
