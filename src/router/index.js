import { createRouter, createWebHashHistory } from 'vue-router';


import About from '@/views/About.vue';
import Contact from '@/components/ContactPage.vue';
import Login from '@/views/LoginPage.vue';
import WeatherComponent from '@/components/WeatherPage.vue';

const routes = [
    { path: '/', component: WeatherComponent, name: 'home' },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login, name: 'login' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router
