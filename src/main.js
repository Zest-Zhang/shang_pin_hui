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
import * as API from "@/api/api";
import { Button, MessageBox } from "element-ui";
// 引入图片懒加载
import img from '@/components/Footer/images/wx_cz.jpg'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    // 预加载高度比例
    preLoad: 1.3,
    // 路径错误时加载图片
    error: 'dist/error.png',
    // 预加载图片
    loading: img,
    // 尝试加载图片数量
    attempt: 1
})

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.component(Carousel.name, Carousel)
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name, Button);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
        Vue.prototype.$API = API
    }
}).$mount('#app')