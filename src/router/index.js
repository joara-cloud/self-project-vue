import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/board',
    component: () => import('@/views/board/Index.vue'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/board/List.vue')
      },      
      {
        path: 'view',
        component: () => import('@/views/board/View.vue')
      },
      {
        path: 'write',
        component: () => import('@/views/board/Write.vue')
      }
    ]
  },
  {
    path: '/usage',
    component: () => import('@/views/Usage.vue'),
  },
  {
    path: '/memo',
    component: () => import('@/views/memo/List.vue'),
    children: [
      {
        path: 'card/:id',
        component: () => import('@/components/memo/CardPopup.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/member/Login.vue')
  },
  {
    path: '*',
    meta: {
      layout: 'blank'
    },
    component: () => import('@/views/404.vue')
  }
]

var router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
