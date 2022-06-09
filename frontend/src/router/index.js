import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import MovieDesc from "../views/MovieDesc.vue";
import MovieDescPerso from "../views/MovieDescPerso.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/home/:userId",
    name: "HomePerso",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/users/:userId",
    name: "UsersPerso",
    component: Users,
  },
  {
    path: "/movies/:movieId",
    name: "MovieDesc",
    component: MovieDesc,
  },
  {
    path: "/movies/:movieId/:userId",
    name: "MovieDescPerso",
    component: MovieDescPerso,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
