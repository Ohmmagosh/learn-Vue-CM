<template>
  <div class="home">
    <v-container>
      <!-- Todo add -->
      <TodAdd @onSubmit="addTask" />
      <!-- Todo list -->
      <TodList @onRemove="removeTask" :todos="todos | reversed" />
      <v-row class="d-flex flex-row justify-content-center align-center">
        <v-img
          class="mt-10"
          contain
          maxHeight="200"
          src="../assets/logo.png"
          alt=""
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TodList from "../components/TodoList.vue";
import TodAdd from "../components/TodoAdd.vue";
import axios from "axios";

export default {
  name: "Home",
  computed: {
    reverseTodo() {
      return this.todos.slice().reverse();
    },
  },
  filters: {
    reversed(value) {
      return value.slice().reverse();
    },
  },
  components: {
    TodList,
    TodAdd,
  },
  async mounted() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.todos = result.data;
  },
  methods: {
    async addTask(task) {
      let result = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        task
      );
      this.todos.push(result.data);
    },
    removeTask(id) {
      axios
        .delete("https://jsonplaceholder.typicode.com/todos/" + id)
        .then((result) => {
          console.log(JSON.stringify(result.data));
          this.todos = this.todos.filter((item) => item.id !== id);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      todos: [],
      todos_mockup: [
        { id: 1, title: "Task1", completed: false },
        { id: 2, title: "Task2", completed: true },
        { id: 3, title: "Task3", completed: false },
      ],
    };
  },
};
</script>
