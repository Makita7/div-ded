import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';

const routes = [
    {
        name: 'div-ded',
        path:'/div-ded/',
        component: HomePage
    },
    {
        name: 'group',
        path:'/div-ded/group/:id',
        component: () => import('../pages/GroupPage.vue'),
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/NotFoundPage.vue') },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

