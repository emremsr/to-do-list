<template>
  <div class="from-slate-700 to-slate-900 bg-gradient-to-r text-white h-screen">
    
    <div class="flex flex-col items-center justify-center pt-36">
      <h1 class="text-7xl mb-5 bg-gradient-to-r from-slate-500 to-green-500 text-transparent bg-clip-text">To-Do List</h1>
      <div class="flex gap-5">
        <input
          class="w-52 text-black p-2 hover:w-56 rounded-xl outline-4 transition-all duration-1000"
          v-model="newTodo"
          placeholder="Add a new task"
        />
        <button
          class="px-4 py-2 bg-green-500 rounded-r-3xl hover:rounded-l-3xl hover:rounded-r-none transition-all duration-1000"
          @click="addTodo"
        >
          Add
        </button>
      </div>
      <div class="pt-8">
        <ul>
          <li v-for="(todo, index) in todos" :key="index">
            <div
              class="flex items-center justify-between w-72 mb-2 p-2 rounded-t-xl hover:rounded-t-none hover:rounded-b-xl border capitalize transition-all duration-200"
            >
              <p>{{ todo }}</p>
              <button class="px-2 rounded-md  hover:bg-red-700 transition-colors duration-500" @click="removeTodo(index)">Remove</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      newTodo: "",
    };
  },
  computed: {
    ...mapGetters(["allTodos"]),
    todos() {
      return this.allTodos;
    },
  },
  methods: {
    ...mapActions(["addTodoAsync"]),
    addTodo() {
      if (this.newTodo) {
        this.addTodoAsync(this.newTodo);
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.$store.commit("removeTodo", index);
    },
  },
};
</script>
