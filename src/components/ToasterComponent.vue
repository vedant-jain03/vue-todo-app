<template>
  <div class="w-[300px] mt-4 flex justify-center items-center bg-gray-700 rounded p-2 absolute top-[10px]">
    {{ props.message }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: String
})

</script>
