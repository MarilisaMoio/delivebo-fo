import { createRouter, createWebHistory } from 'vue-router';
import AppRestaurants from './pages/AppRestaurants.vue';

const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppRestaurants
        },
    ]
});

export { router };