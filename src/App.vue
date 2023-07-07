<template>
  <div class="bg-[#0d1116] w-[100vw] flex items-center justify-center py-4">
    <router-link to="/todo-app" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    :class="{'dark:bg-gray-700': $route.path === '/todo-app'}"
    >Todo App
    </router-link>
    <router-link to="/about-us" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    :class="{ 'dark:bg-gray-700': $route.path === '/about-us' }"
    >About</router-link>
    <router-link to="/free-jokes" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    :class="{ 'dark:bg-gray-700': $route.path === '/free-jokes' }"
    >Free Jokes</router-link>
  </div>
  <div class="w-[100vw] bg-[#0d1116] h-[100vh] flex items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
