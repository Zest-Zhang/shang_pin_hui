import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router.js"
import TypeNav from '@/components/TypeNav/TypeNav'
import store from "@/store/store"

Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')