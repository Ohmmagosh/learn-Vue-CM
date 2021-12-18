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
import slot  from "../views/slot.vue";
import Condition from "../views/Condition.vue";
import Loop from "../views/loop.vue";
import Lifecyclehook from "../views/Lifecyclehook.vue";

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
  {
    path: "/slot",
    name: "slot",
    component: slot,
  },
  {
    path: "/Condition",
    name: "Condition",
    component: Condition,
  },
  {
    path: "/Loop",
    name: "Loop",
    component: Loop,
  },
  {
    path: "/Lifecyclehook",
    name: "Lifecyclehook",
    component: Lifecyclehook,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
