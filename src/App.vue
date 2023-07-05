<template>
  <div class="w-[100vw] h-[100vh] bg-[#0d1116] flex items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <Heading :title="heading" />
      <TodoInput @handleSubmit="handleSubmit" />
      <TodoList :todo-lists="todoLists" @handleFilter="handleFilter" />
      <Toaster v-if="toaster" :message="toasterMessage" />
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/HeadingComponent.vue'
import Toaster from '@/components/ToasterComponent.vue';
import TodoInput from '@/components/TodoInputComponent.vue';
import TodoList from '@/components/TodoListComponent.vue';
import { ref } from 'vue';

const heading = ref('Todo App');
const todoLists = ref([]);
const toaster = ref(false)
const toasterMessage = ref('List updated!')
const timeOut = ref(null);

function handleToaster() {
  toaster.value = true;
  if (timeOut.value) {
    clearTimeout(timeOut.value)
  }
  timeOut.value = setTimeout(() => {
    toaster.value = false;
  }, 1000);
}

function handleSubmit(input) {
  todoLists.value.push(input);
  handleToaster();
}

function handleFilter(index) {
  todoLists.value = todoLists.value.filter((_, id) => id !== index);
  handleToaster();
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
