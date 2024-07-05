import { createRouter, createWebHistory } from 'vue-router';
import AppRestaurants from './pages/AppRestaurants.vue';
import AppDishes from './pages/AppDishes.vue';
import AppHome from './pages/AppHome.vue';
const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/restaurants',
            name: 'restaurants',
            component: AppRestaurants
        },
        {
            path: '/:slug',
            name: 'single-menu',
            component: AppDishes,
        },
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
    ]
});

export { router };