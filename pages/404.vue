<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <van-empty image="network" description="您访问到了未知领域" />
    <div class="w-40" @click="$router.push('/')">
      <van-button round block color="linear-gradient(to right, #ff6034, #ee0a24)">返回首页</van-button>
    </div>
  </div>
</template>