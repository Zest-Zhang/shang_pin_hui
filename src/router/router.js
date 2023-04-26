import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@/router/routes";

export default new VueRouter({
    // 配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { x: 0, y: 0 }
},
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


