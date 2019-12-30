import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
// import manage from '@/pages/manage'
// import home from '@/pages/home'
// import order_1 from '@/pages/order_1'
// import order_2 from '@/pages/order_2'
// import desc from '@/pages/desc'
// import ds from '@/pages/ds'
// import finish_order from '@/pages/finish_order'
// import performance from '@/pages/performance'
// import performancebus from '@/pages/performancebus'
// import nps from '@/pages/nps'
// import npsbus from '@/pages/npsbus'
// import npsDesc from '@/pages/npsDesc'
// import printing from '@/pages/printing'
// import ygadmin from '@/pages/ygadmin'
// import closeorder from '@/pages/closeorder'
// import addorder from '@/pages/addorder'
// import addyg from '@/pages/addyg'
// import product from '@/pages/product'
// import productinfo from '@/pages/productinfo'
// import addproduct from '@/pages/addproduct'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        }

    ]
})