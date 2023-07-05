<template>
  <div>
    <h1 class="text-2xl font-bold">{{ props.title }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String
})
</script>
