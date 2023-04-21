import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quizes',
            component: () => import('../views/QuizesView.vue')
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: () => import('../views/QuizView.vue')
        },
        // {
        //     path: '/:pathMatch(.*)*',
        //     name: 'NotFound',
        //     component: () => import('../views/NotFoundView.vue')
        // }
    ]
})

export default router