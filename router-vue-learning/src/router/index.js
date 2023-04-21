// define our routing rules
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/cars/:id',
            name: 'Car',
            component: () => import('../views/CarView.vue'),
            children: [
                {
                    path: 'contact',
                    component: () => import('../views/ContactView.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        }
    ]
})

export default router