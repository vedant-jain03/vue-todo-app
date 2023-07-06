<template>
  <div>
    <h1 class="text-2xl font-bold">{{ props.title }}</h1>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: String
}

const props = defineProps<Props>();
</script>
