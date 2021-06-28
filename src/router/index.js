import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main';

Vue.use(VueRouter);


const routes = [
    {
        path:'/',
        redirect:'/index',
        component:Main,
        children:[
            {
                path:'/index',
                name:'home',
                component:() => import('../views/Home/Home')
            },
            {
                path:'/video',
                name:'video',
                component:() => import('../views/VideoManage/VideoManage')
            },
            {
                path:'/user',
                name:'user',
                component:() => import('../views/UserManage/UserManage')
            },
            {
                path:'/page1',
                name:'page1',
                component:() => import('../views/Others/PageOne')
            },
            {
                path:'/page2',
                name:'page2',
                component:() => import('../views/Others/PageTwo')
            },
           
        ]
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../views/Login/login')
    },
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from ,next) => {
    console.log('to:',to,"from:",from)
    next()
})

export default router;
