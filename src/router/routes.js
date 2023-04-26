import Home from "@/pages/Home/Home";
import Search from "@/pages/Search/Search";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Detail from "@/pages/Detail/Detail";

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
        path: '/',
        redirect:"/home"
    },
]