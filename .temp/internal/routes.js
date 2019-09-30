/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/Users/huangcheng/.config/yarn/global/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-5b6432bd",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5b6432bd").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-1c4a1bbe",
    path: "/guide/webpack.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1c4a1bbe").then(next)
    },
  },
  {
    name: "v-953666ba",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-953666ba").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-73b90f5e",
    path: "/guide/preface.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-73b90f5e").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]