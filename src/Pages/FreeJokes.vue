<template>
  <div class="h-[70vh] w-[100vw] flex items-center justify-center">
    <div
      class="relative w-[500px] h-[250px] bg-gray-800 p-6 rounded shadow-[0_0px_30px_-15px] shadow-cyan-500/50 flex items-center justify-center">
      <button class="absolute right-[0] top-[-30px]" @click="fetchNewJokes">
        <Icon class="text-2xl text-gray-400" icon="material-symbols:refresh" />
      </button>
      <LoadingScreen v-if="isLoading" />
      <span v-if="!isLoading" class="text-lg">
        {{ jokeText }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import fetchJokes from '@/composables/fetchJokes';
import LoadingScreen from '@/components/LoadingScreen.vue';
import { onMounted } from 'vue';

const { isLoading, jokeText, fetchNewJokes } = fetchJokes();

onMounted(() => {
  fetchNewJokes();
})

</script>
