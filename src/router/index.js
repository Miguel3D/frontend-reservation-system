import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ClientList from "@/views/ClientList.vue";
import ReservationList from "@/views/ReservationList.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/clients",
    name: "ClientList",
    component: ClientList,
  },
  {
    path: "/reservations",
    name: "ReservationList",
    component: ReservationList,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
