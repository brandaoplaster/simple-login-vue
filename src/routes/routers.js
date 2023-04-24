import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";
import Login from "../components/Login";
const Dashboard = () => import("../components/Dashboard")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
