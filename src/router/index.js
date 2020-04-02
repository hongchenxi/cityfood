import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/Home/Home')
const City = () => import('../pages/City/City')
const Mine = () => import('../pages/Mine/Mine')

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                showTabbar: true
            }
        },
        {
            path: '/city',
            component: City,
            meta: {
                showTabbar: true
            }
        },
        {
            path: '/mine',
            component: Mine,
            meta: {
                showTabbar: true
            }
        },
        {
            path: '/',
            redirect: '/home'
        },
    ]
})
