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

<script setup lang="ts">
import Heading from '@/components/HeadingComponent.vue'
import Toaster from '@/components/ToasterComponent.vue';
import TodoInput from '@/components/TodoInputComponent.vue';
import TodoList from '@/components/TodoListComponent.vue';
import { Ref, ref } from 'vue';

const heading: Ref<string> = ref('Todo App');
const todoLists: Ref<string[]> = ref([]);
const toaster: Ref<boolean> = ref(false)
const toasterMessage: Ref<string> = ref('List updated!')
const timeOut: Ref<any> = ref(null);

function handleToaster() {
  toaster.value = true;
  if (timeOut.value) {
    clearTimeout(timeOut.value)
  }
  timeOut.value = setTimeout(() => {
    toaster.value = false;
  }, 1000);
}

function handleSubmit(input: string) {
  todoLists.value.push(input);
  handleToaster();
}

function handleFilter(index: number) {
  todoLists.value = todoLists.value.filter((_, id: number) => id !== index);
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
