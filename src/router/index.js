import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import("views/Home/Home.vue")
const Work = () => import("views/Work/Work.vue")
const MyClass = () => import("views/MyClass/MyClass.vue")
const Profile = () => import("views/Profile/Profile.vue")

const routes = [
    {
        path:"",
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/work',
        component:Work
    },
    {
        path:'/myclass',
        component:MyClass
    },
    {
        path:'/profile',
        component:Profile
    },
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router