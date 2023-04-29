import Home from "@/pages/Home/Home";
import Search from "@/pages/Search/Search";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Detail from "@/pages/Detail/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess/AddCartSuccess"
import ShopCart from '@/pages/ShopCart/ShopCart';

export default [
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
        path: '/',
        redirect:"/home"
    },
]