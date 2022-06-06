<template>
  <div class="relatvie pt-11 pb-12">
    <!-- header -->
    <header class="fixed top-0 inset-x-0 h-11 max-w-md mx-auto flex items-center pl-3 pr-2 bg-gray-50 z-[10000]">
      <h2>
        早上好！<span class="text-primary">立即登录</span>
      </h2>
      <div class="ml-auto flex items-center space-x-1">
        <div class="p-1">
          <van-icon name="scan" size="1.25rem" class="w-5 h-5" />
        </div>
        <div class="p-1">
          <van-icon name="shopping-cart-o" size="1.25rem" class="w-5 h-5" />
        </div>
        <div class="p-1">
          <van-icon name="chat-o" size="1.25rem" class="w-5 h-5" />
        </div>
      </div>
    </header>
    <!-- search -->
    <div class="h-[2.88rem] px-3 py-2">
      <BaseSearch />
    </div>
    <!-- 买药品、看医生 -->
    <div class="mt-3 px-3 flex justify-between space-x-4">
      <div 
        class="w-full h-20 rounded-lg shadow bg-white flex items-center px-2.5"
        @click="$router.push('/shop')"  
      >
        <div class="space-y-2.5">
          <h2>买药品</h2>
          <p class="text-gray-400">正品保障更安心</p>
        </div>
        <div class="ml-auto w-[3.13rem] h-[3.13rem] rounded-tl-2xl rounded-tr-3xl rounded-b-3xl bg-gradient-to-br from-primary to-orange-400">
        </div>
      </div>
      <div
        class="w-full h-20 rounded-lg shadow bg-white flex items-center px-2.5"
        @click="$router.push('/doctor')"    
      >
        <div class="space-y-2.5">
          <h2>看医生</h2>
          <p class="text-gray-400">正品保障更安心</p>
        </div>
        <div class="ml-auto w-[3.13rem] h-[3.13rem] rounded-tl-2xl rounded-tr-3xl rounded-b-3xl bg-gradient-to-br from-blue-500 to-blue-300">
        </div>
      </div>
    </div>
    <!-- kingkong -->
    <div class="mt-5 px-3 grid grid-cols-5 gap-x-3.5 h-16">
      <div v-for="i in 5" :key="i" class="w-full text-center space-y-1.5">
        <div class="w-[2.88rem] h-[2.88rem] bg-gradient-to-br from-primary to-orange-400 rounded-full mx-auto"></div>
        <p>预约体检</p>
      </div>
    </div>
    <!-- banner -->
    <div class="mt-5 px-3">
      <div class="w-full h-[6.25rem] bg-blue-400 rounded-lg"></div>
    </div>
    <!-- 内容区域 -->
    <main class="mt-6 space-y-6">
      <!-- 活动专区 -->
      <section class="px-3">
        <div class="flex items-center mb-4">
          <h2>活动专区</h2>
          <p class="ml-auto text-gray-500" @click="$router.push('/activity')">查看全部
            <van-icon name="arrow" class="w-3 h-3" />
          </p>
        </div>
        <div class="grid grid-cols-2 gap-3.5 h-[12.5rem]">
          <div class="row-span-2 w-full h-full bg-red-200 rounded-lg"></div>
          <div class="w-full h-full bg-red-200 rounded-lg"></div>
          <div class="w-full h-full bg-red-200 rounded-lg"></div>
        </div>
      </section>
      <!-- 热销商品 -->
      <section class="px-3">
        <div class="flex items-center mb-4">
          <h2>热销商品</h2>
          <p class="ml-auto text-gray-500">查看全部
            <van-icon name="arrow" class="w-3 h-3" />
          </p>
        </div>
        <div class="grid grid-cols-2 gap-3.5 h-[12.5rem]">
          <div class="row-span-2 w-full h-full bg-orange-200 rounded-lg"></div>
          <div class="w-full h-full bg-orange-200 rounded-lg"></div>
          <div class="w-full h-full bg-orange-200 rounded-lg"></div>
        </div>
        <div class="mt-3.5 w-full h-[8.88rem] rounded-lg shadow bg-white px-2.5 py-[1.13rem]">
          <div class="flex items-center">
            <h3 class="text-primary font-bold">保健品系列</h3>
            <div class="ml-auto tag1">关爱健康</div>
          </div>
          <div class="mt-[1.13rem] flex justify-between">
            <div v-for="i in 5" :key="i" class="space-y-2 text-center">
              <div class="w-14 h-14 rounded-lg bg-gray-200"></div>
              <p>生活系列</p>
            </div>
          </div>
        </div>
      </section>
      <!-- 医疗器械 -->
      <section class="px-3">
        <div class="flex items-center mb-4">
          <h2>医疗器械</h2>
          <p class="ml-auto text-gray-500">查看全部
            <van-icon name="arrow" />
          </p>
        </div>
        <div class="space-y-3.5">
          <div class="w-full h-[14.38rem] bg-orange-100 rounded-lg"></div>
          <div class="w-full h-[14.38rem] bg-blue-100 rounded-lg"></div>
        </div>
      </section>
      <!-- 体检产品 -->
      <section>
        <div class="flex items-center px-3 mb-4">
          <h2>体检产品</h2>
          <p class="ml-auto text-gray-500">查看全部
            <van-icon name="arrow" />
          </p>
        </div>
        <div class="snap-x flex overflow-x-scroll space-x-3.5 px-3">
          <div class="snap-center flex-shrink-0 w-11/12 h-[19.69rem] bg-orange-200 rounded-lg shadow">
            11
          </div>
          <div class="snap-center flex-shrink-0 w-11/12 h-[19.69rem] bg-orange-200 rounded-lg shadow">
            22
          </div>
          <div class="snap-center flex-shrink-0 w-11/12 h-[19.69rem] bg-orange-200 rounded-lg shadow">
            33
          </div>
        </div>
      </section>
      <!-- 最新资讯 -->
      <section class="px-3">
        <div class="flex items-center mb-1">
          <h2>最新资讯</h2>
          <p class="ml-auto text-gray-500">查看全部
            <van-icon name="arrow" />
          </p>
        </div>
        <div 
          v-for="item in infoList.data" :key="item.id" 
          class="py-3.5 border-b space-y-3 h-[9.5rem]" 
          @click="$router.push('/info/detail/' + item.id)"
        >
          <p class="text-primary font-bold">抗癌体检</p>
          <div class="flex justify-between space-x-4">
            <div>
              <h3 class="leading-[1.38rem] line-2 h-10">{{ item.title }}</h3>
              <p class="mt-3 text-gray-400 line-1">{{ item.author }}</p>
              <div class="mt-3 flex items-end space-x-3">
                <p class="text-gray-500">{{ item.time }}</p>
                <div class="tag1">最新</div>
              </div>
            </div>
            <van-image
              :src="item.pic"
              radius="7"
              :alt="item.title"
              class="flex-shrink-0 w-28 h-[5.83rem]"
            >
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </div>
        </div>
      </section>
    </main>
    <p class="text-center py-5">划到底了哦~</p>
    <!-- footer -->
    <LazyBaseFooter />
  </div>
</template>

<script setup>

// loading
const showLoadingPage = changeLoading()
onMounted(() => {
  showLoadingPage.value = false
})
const config = useRuntimeConfig()


/* 方法一： useAsyncData  */
// 参数一： 一个名字，  参数二：请求函数 () => $fetch(url),  参数三：配置项(一般不用配置)
// const { data: todos, pending: ppp } = await useAsyncData('todos', () => $fetch(config.baseURL + '/open/gdindex1/getArticlePros'), { lazy: true })

/* 方法二：useFetch */
console.log(config.baseURL, 'ccccccccccccccc')
const { data: infoList } = await useFetch(config.baseURL + '/open/gdindex1/getArticlePros')
console.log(config.token)

</script>