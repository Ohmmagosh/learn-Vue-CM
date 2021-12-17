import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import learn1 from "../views/learn1.vue";
import AddReduce from "../views/AddReduce.vue";
import Message from "../views/message.vue";
import EventMethod from "../views/EventMethod.vue";
import DataVariable from "../views/DataVariable.vue";
import DictionaryArray from "../views/DictionaryArray.vue";
import styleGlobalLocal from "../views/styleGlobalLocal.vue";
import compute from "../views/compute.vue";
import Binding from "../views/Binding.vue";
import inputVmodel from "../views/inputVmodel.vue";

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
    component: Message,
  },
  {
    path: "/EventMethod",
    name: "EventMethod",
    component: EventMethod,
  },
  {
    path: "/DataVariable",
    name: "DataVariable",
    component: DataVariable,
  },
  {
    path: "/DictionaryArray",
    name: "DictionaryArray",
    component: DictionaryArray,
  },
  {
    path: "/styleGlobalLocal",
    name: "styleGlobalLocal",
    component: styleGlobalLocal,
  },
  {
    path: "/compute",
    name: "compute",
    component: compute,
  },
  {
    path: "/Binding",
    name: "Binding",
    component: Binding,
  },
  {
    path: "/inputVmodel",
    name: "inputVmodel",
    component: inputVmodel,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
