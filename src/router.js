import { createRouter, createWebHistory } from 'vue-router'

import Arena from './pages/Arena.vue'
import Breakdown from './pages/Breakdown.vue'
import Home from './pages/Home.vue'
import Mechanics from './pages/Mechanics.vue'
import Openworld from './pages/Openworld.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/mechanics',
            name: 'mechanics',
            component: Mechanics
        },
        {
            path: '/Arena',
            name: 'Arena',
            component:Arena
        },
        {
            path: '/breakdown',
            name: 'breakdown',
            component:Breakdown
        },
        {
            path: '/openworld',
            name: 'openworld',
            component: Openworld
        },
    ]
})


export default router