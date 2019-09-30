import Vue from 'vue'
Vue.component("OtherComponent", () => import("/Users/huangcheng/hc/dayUP/days/docs/.vuepress/components/OtherComponent"))
Vue.component("UpgradePath", () => import("/Users/huangcheng/hc/dayUP/days/docs/.vuepress/components/UpgradePath"))
Vue.component("demo-1", () => import("/Users/huangcheng/hc/dayUP/days/docs/.vuepress/components/demo-1"))
Vue.component("svg-container", () => import("/Users/huangcheng/hc/dayUP/days/docs/.vuepress/components/svg-container"))
Vue.component("Foo-Bar", () => import("/Users/huangcheng/hc/dayUP/days/docs/.vuepress/components/Foo/Bar"))
Vue.component("Badge", () => import("/Users/huangcheng/hc/dayUP/days/node_modules/@vuepress/theme-default/global-components/Badge"))


export default {}