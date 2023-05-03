import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@/router/routes";
import store from "@/store/store";

Vue.use(VueRouter)

let router = new VueRouter({
    // 配置路由
    routes,
    scrollBehavior() {
    // 始终滚动到顶部
    return { x: 0, y: 0 }
},
})

//全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async(to, from, next) => {
    // to and from are both route objects. must call `next`.
    //获取仓库中的token-----可以确定用户是登录了
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    //用户登录了
    if (token) {
        //已经登录而且还想去登录------不行
        if (to.path == "/login" || to.path == "/register") {
            next("/home");
        } else {
            //已经登陆了,访问的是非登录与注册
            //登录了且拥有用户信息放行
            if (name) {
                next();
            } else {
                //登陆了且没有用户信息
                //在路由跳转之前获取用户信息且放行
                try {
                    //获取用户信息
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {
                    //token失效从新登录
                    //清除token
                    await store.dispatch("logout");
                    // 回到登录页
                    await this.$router.push("/login");
                }
            }
        }
    } else {
        //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
        //未登录去上面这些路由-----登录
        let toPath = to.path;
        if (toPath.includes("/trade") || toPath.includes("/pay") || toPath.includes("/center")) {
            //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
            next("/login?redirect=" + toPath);
            // console.log(toPath);
        } else {
            //去的不是上面这些路由（home|search|shopCart）---放行
            next();
        }
    }
});

// 编程式路由跳转到当前路由(参数不变),多次执行后会抛出 NavigationDuplicated 错误,
// 解决方法：重写 push 和 replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function( location,resolve,reject ){
    if( resolve&&reject ){
        originPush.call( this,location,resolve,reject )
    }else{
        originPush.call( this,location,()=>{}, ()=>{} ) }
}
VueRouter.prototype.replace = function( location,resolve,reject ){
    if( resolve&&reject ){
        originReplace.call( this,location,resolve,reject )
    }else{ originReplace.call( this,location,()=>{}, ()=>{} )
    }
}

export default router

