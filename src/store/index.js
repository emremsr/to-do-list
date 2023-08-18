import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      todos: [],
    };
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1);
    },
  },
  actions: {
    addTodoAsync({ commit }, todo) {
      setTimeout(() => {
        commit('addTodo', todo);
      }, 1000);
    },
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
  },
});
