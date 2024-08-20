import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import { getCurrentUser } from "vuefire";

const routes = [
    {
        name: 'div-ded',
        path:'/div-ded/',
        component: HomePage,
        meta: { isProtected: true },
    },
    {
        name: 'login',
        path: '/div-ded/login',
        component: () => import('../pages/LogInPage.vue'),
    },
    {
        name: 'group',
        path:'/div-ded/group/:id',
        component: () => import('../pages/GroupPage.vue'),
        meta: { isProtected: true },
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/NotFoundPage.vue'),
        meta: { isProtected: true },
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});


// router.beforeEach(async (to) => {
//     const user = await getCurrentUser();
//     to.meta.user = user;
//     if(to.meta.isProtected && !user){
//         return { name: 'Forbidden' }
//     }
// })
