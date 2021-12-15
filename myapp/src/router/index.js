import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import learn1 from "../views/learn1.vue";
import AddReduce from "../views/AddReduce.vue";
import Message from "../views/message.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/learn1",
    name: "learn1",
    component: learn1,
  },
  {
    path: "/AddReduce",
    name: "AddReduce",
    component: AddReduce,
  },
  {
    path: "/Message",
    name: "Message",
    component: Message ,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
