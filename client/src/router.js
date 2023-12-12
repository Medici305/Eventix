import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/EventsPage.vue'),
    },
    {
      path: '/events/:id',
      name: 'eventDetails',
      component: () => import('@/views/EventDetails.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterPage.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('@/views/404Page.vue'),
    },
  ],
});

export default router;
