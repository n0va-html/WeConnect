import { createRouter, createWebHistory } from 'vue-router';
import accueil from '../views/index.vue';
import Register from '../views/register.vue';

const routes = [
    { path: '/', component: accueil },
    { path: '/register', component: Register },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;