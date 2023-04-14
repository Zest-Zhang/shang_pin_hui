import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta:{show:true},
        },
        {
            path:"/search/:keyword?",
            component:Search,
            meta:{ show:true },
            name:"search"
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "*",
            redirect:"/home"
        },
]
})

Vue.use(VueRouter)

// 编程式路由跳转到当前路由(参数不变),多次执行后会抛出 NavigationDuplicated 错误,
// 解决方法：重写 push 和 replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.Replace
VueRouter.prototype.push = function( location,resolve,reject ){
    if( resolve&&reject ){ 
        originPush.call( this,location,resolve,reject ) 
    }else{
        originPush.call( this,location,()=>{}, ()=>{} ) }
}
VueRouter.prototype.Replace = function( location,resolve,reject ){
    if( resolve&&reject ){
        originReplace.call( this,location,resolve,reject )
    }else{ originReplace.call( this,location,()=>{}, ()=>{} )
    }
}


