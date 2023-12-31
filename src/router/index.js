import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title : 'Home'}
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || import.meta.env.VITE_PROJECT_TITLE; // Set the page title
  next();
});

export default router
