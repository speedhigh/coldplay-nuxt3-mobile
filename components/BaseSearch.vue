<!-- 假搜索框 -->
<template>
  <div class="w-full h-full rounded-2xl border border-primary flex items-center text-xs">
    <p class="px-4 text-gray-400">{{ title }}</p>
    <div class="ml-auto rounded-2xl text-center w-[3.75rem] h-[1.88rem] bg-primary text-white leading-[1.88rem]">搜索</div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '请输入您要搜索的产品'
    }
  })
</script>