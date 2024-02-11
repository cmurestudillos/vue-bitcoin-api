// Rutas
import { createRouter, createWebHistory } from 'vue-router';
// Componentes
import HomeComponent from '../components/home/HomeComponent.vue';
import ErrorComponent from '../components/shared/error/ErrorComponent.vue';

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeComponent},
    {path: '/:catchAll(.*)', component: ErrorComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;