import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home.vue";
import About from "../views/About.vue";
import Add from  "../views/Add.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Add",
    name: "Add",
    component: Add,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
