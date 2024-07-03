import { createRouter, createWebHistory } from 'vue-router';
import AppRestaurants from './pages/AppRestaurants.vue';
import AppDishes from './pages/AppDishes.vue';

const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppRestaurants
        },
        {
            path: '/:slug',
            name: 'dishes',
            component: AppDishes
        },
    ]
});

export { router };