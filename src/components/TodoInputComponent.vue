<template>
  <div class="my-4">
    <form @submit.prevent="handleFormSubmit">
      <input
        class="w-[400px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
        type="text" v-model="todoInputItem">
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

const emits = defineEmits<{
  handleSubmit: [input: string]
}>();

const todoInputItem: Ref<string> = ref('');

function handleFormSubmit() {
  emits('handleSubmit', todoInputItem.value);
  todoInputItem.value = '';
}
</script>
