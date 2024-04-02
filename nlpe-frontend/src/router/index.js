import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/datachart',
      name: 'DataChart',
      component: () => import('../views/sentiment/DataChart.vue')
    },
    {
      path: '/datatable',
      name: 'DataTable',
      component: () => import('../views/sentiment/DataTable.vue')
    },
    {
      path: '/datasets',
      name: 'DatasetList',
      component: () => import('../views/dataset/DatasetList.vue')
    },
    {
      path: '/dataset/:id',
      name: 'DatasetDetail',
      component: () => import('../views/dataset/DatasetDetail.vue'),
      props: true
    },
    {
      path: '/error',
      name: 'Error',
      component: () => import('../views/error/ErrorPage.vue'),
      meta: {
        layout: 'error'
      }
    }
  ]
})

export default router
