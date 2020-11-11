import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home';
import Card from './pages/Card';
import CreateProduct from './pages/CreateProduct';



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/card/:product_id',
        name: 'card',
        component: Card,
        props: true
    },  {
        path: '/CreateProduct',
        name: 'createproduct',
        component: CreateProduct,
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router