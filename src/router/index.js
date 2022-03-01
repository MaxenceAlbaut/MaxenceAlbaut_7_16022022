import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Forum from '@/views/Forum.vue'
import User from '@/views/User.vue'

const routes = [
    {path: '/', name: 'Login', component: Login},
    {path: '/signup', name: 'Signup', component: Signup},
    {path: '/forum', name: 'Forum', component: Forum},
    {path: '/user/:id', name: 'User', component: User}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router