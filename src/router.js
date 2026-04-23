import { createRouter, createWebHistory } from 'vue-router'

import Arina from './pages/Arina.vue'
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
            path: '/Arina',
            name: 'Arina',
            component:Arina
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