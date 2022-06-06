import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  router: {
    extendRoutes(routes: any) {
      routes.push({
        path: "*",
        redirect: "/404",
      });
    },
  },
  // runtimeConfig: {
  //   apiSecret: '',
  //   public: {
  //     apiBase: '', // Or a default value
  //   }
  // },
  meta: {
    title: '光大健康在线',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '光大健康在线提供健康在线咨询，日本健康咨询，赴日精密体检，海外药品商城等多个项目，为您的健康保驾护航' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/logo.ico' }
    ]
  },
  publicRuntimeConfig: { 
    baseURL: process.env.BASE_URL,
    token: 'xxxxxxxx' 
  },
})
