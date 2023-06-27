import Home from "@/pages/Home/Home";
import Search from "@/pages/Search/Search";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Detail from "@/pages/Detail/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess/AddCartSuccess"
import ShopCart from '@/pages/ShopCart/ShopCart';
import Trade from "@/pages/Trade/Trade";
import Pay from "@/pages/Pay/Pay";
import PaySuccess from "@/pages/PaySuccess/PaySuccess";
import Center from "@/pages/Center/Center";
import myOrder from "@/pages/Center/myOrder/myOrder";
import groupOrder from "@/pages/Center/groupOrder/groupOrder";

export default [
    {
        path: "/home",
        component: Home,
        meta:{show:true},
    },
    {
        name:"search",
        path:"/search/:keyword?",
        component:Search,
        meta:{ show:true },
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
        path: "/detail/:skuid",
        component: Detail
    },
    {
        path:"/addcartsuccess",
        name:"addcartsuccess",
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:"/shopcart",
        component:ShopCart,
        meta:{show:true },
    },
    {
        path: "/trade",
        component: Trade,
        meta: {
            show: true,
        },
        // 路由独享守卫
        // 目的：确保用户只能从/shopcart的路由跳转到当前路由，避免从其他路由跳转过来
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/paySuccess",
        component: PaySuccess,
        meta: {
            show: true,
        },
    },
    {
        path: "/pay",
        component: Pay,
        meta: {
            show: true,
        },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/center",
        component: Center,
        //二级路由
        children: [
            {
            path: "myorder",
            component: myOrder,
        },
            {
                path: "groupbuy",
                component: groupOrder,
            },
            { //重定向一上来就展示myorder组件
                path: '',
                redirect: 'myorder'
            }
        ],
        meta: {
            show: true,
        },
    },
    {
        path: '/',
        redirect:"/home"
    },
]