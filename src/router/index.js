import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AjaxConfig from '@/components/AjaxConfig'
import BootTable from '@/components/BootTable'
import Charts from '@/components/Charts'

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/AjaxConfig',
            name: 'AjaxConfig',
            component: AjaxConfig
        },
        {
            path: '/BootTable',
            name: 'BootTable',
            component: BootTable
        },
        {
            path: '/Charts',
            name: 'Charts',
            component: Charts
        },
        
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
});

router.beforeEach((to,from,next)=>{
    
    next();
    
});
export default router;