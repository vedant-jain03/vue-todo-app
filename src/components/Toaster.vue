<template>
  <div class="w-[300px] mt-4 flex justify-center items-center bg-gray-700 rounded p-2 absolute top-[10px]">
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'toaster-component',
    props: {
      message: String
    }
  }
</script>

<style scoped>

</style>