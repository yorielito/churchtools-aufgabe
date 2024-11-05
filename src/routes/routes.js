import {createWebHistory, createRouter} from 'vue-router';

  const routes = [
    {path: '/', component: ()=> import('../pages/Home.vue')},
    {path: '/about', component: ()=> import('../pages/About.vue')},
    {path: '/details/:id', component: () => import('../pages/Details.vue')}
  ]

  export const router = createRouter({
    history: createWebHistory(),
    routes,
  })
