<template>
  <div class="w-full p-2 bg-gray-700 rounded h-[400px] overflow-y-scroll">
    <div v-if="todoLists.length === 0"
      class="hover:scale-[1.01] cursor-pointer p-2 rounded flex items-center justify-center text-gray-400">
      <span>No items</span>
    </div>
    <div v-for="(item, index) in todoLists" :key="index"
      class="hover:scale-[1.01] cursor-pointer bg-gray-800 p-2 rounded px-4 m-2 mx-2 flex items-center justify-between shadow-lg">
      <span>{{ item }}</span>
      <button class="bg-gray-700 w-[25px] rounded-full flex item-center justify-center hover:bg-gray-600 transition duration-20 delay-10 hover:delay-0" @click="$emit('handleFilter', index)" >x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-list-component',
  props: {
    todoLists: Array
  },
  emits: ['handleFilter']
}
</script>

<style scoped></style>