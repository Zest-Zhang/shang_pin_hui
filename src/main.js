import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router.js"
import TypeNav from "@/components/TypeNav/TypeNav";
import store from "@/store/store"
import "@/mock/mockServe"
import "swiper/css/swiper.css"
import Carousel from '@/components/Carousel/Carousel'
import Pagination from '@/components/Pagination/Pagination'
import "@/plugins/validate";

Vue.component(Carousel.name, Carousel)
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
    beforeCreate(){ Vue.prototype.$bus = this }
}).$mount('#app')