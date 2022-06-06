import { defineNuxtPlugin } from "#app"
import {
  Button,
  Empty,
  Icon,
  Image as VanImage,
  Loading,
  Tab,
  Tabs,
  Swipe,
  SwipeItem
} from 'vant'

import 'vant/lib/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button).use(Empty).use(Icon).use(VanImage).use(Loading).use(Tab).use(Tabs).use(Swipe).use(SwipeItem)
});