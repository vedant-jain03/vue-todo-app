<template>
  <div class="w-[100vw] h-[100vh] bg-[#0d1116] flex items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <Heading :title="heading" />
      <TodoInput :todo-lists="todoLists" @handleSubmit="handleSubmit" />
      <TodoList :todo-lists="todoLists" @handleFilter="handleFilter" />
      <Toaster v-if="toaster" :message="toasterMessage" />
    </div>
  </div>
</template>

<script>
import Heading from './components/Heading.vue';
import Toaster from './components/Toaster.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    Heading,
    TodoInput,
    TodoList,
    Toaster
  },
  data() {
    return {
      heading: 'Todo App',
      todoLists: [],
      toaster: false,
      toasterMessage: 'List updated!',
      timeOut: null
    }
  },
  methods: {
    handleSubmit(input) {
      this.todoLists.push(input);
    },
    handleFilter(index) {
      console.log(index)
      this.todoLists = this.todoLists.filter((_, id) => id !== index)
    }
  },
  watch: {
    todoLists: {
      handler() {
        this.toaster = true
        if (this.timeOut) {
          clearTimeout(this.timeOut);
        }
        this.timeOut = setTimeout(() => {
          this.toaster = false
        }, 1000)
      },
      deep: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
