<template>
  <header class="fixed top-0 inset-x-0 max-w-md w-full h-11 bg-white z-[10000]">
    <div class="w-full h-full flex items-center pr-14">
      <div class="p-3" @click="$router.go(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <h1 class="mx-auto text-lg">{{ title }}</h1>
    </div>
  </header>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: ''
    }
  })
</script>