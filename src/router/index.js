import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage/HomeView.vue';
const LoginView = () => import('../views/User/LoginView.vue');
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/HomePage/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
