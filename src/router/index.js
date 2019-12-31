import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import tf from '@/pages/tf'
import finish from '@/pages/finish'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/tf',
            name: 'tf',
            component: tf
        },
        {
            path: '/finish',
            name: 'finish',
            component:finish
        }

    ]
})