import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';
import NotFound from '@/views/404.vue';

Vue.use(VueRouter);

var routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    meta: {
      layout: 'blank'
    },
    component: NotFound
  },
  // {
  //   path: '*',
  //   meta: {
  //     layout: 'blank'
  //   },
  //   component: () => import('@/views/404.vue')
  // }
]

var router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
