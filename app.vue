<template>
  <div 
    class="container max-w-md min-h-screen mx-auto bg-gray-50 text-gray-900 relative"
    :class="{'overflow-hidden': showLoadingPage}"
  >
    <!-- LoadingPage -->
    <div v-if="showLoadingPage" class="fixed inset-0 w-full h-screen z-[100000]">
      <LazyLoadingPage class="w-full h-full" />
    </div>
    <!-- Page -->
    <NuxtPage :class="{'overflow-hidden': showLoadingPage}" />
  </div>
</template>

<script setup>
const showLoadingPage = changeLoading()
</script>

<style>
h2 { @apply text-gray-900 font-bold text-lg leading-none }
h3 { @apply text-base leading-none }
h4 { @apply text-sm leading-none }
p { @apply text-xs leading-none }
.line-1 { @apply break-words line-clamp-1 }
.line-2 { @apply break-words line-clamp-2 }
.line-3 { @apply break-words line-clamp-3 }
.line-4 { @apply break-words line-clamp-4 }
.line-5 { @apply break-words line-clamp-5 }
.btn-plain { @apply rounded-full text-primary border border-primary }
.tag1 {
  @apply text-xs text-white px-2.5 leading-4 rounded-t-3xl rounded-bl-none rounded-br-3xl;
  background: linear-gradient(88deg, #FF2340 0%, #FD8E7B 100%)
}
</style>
