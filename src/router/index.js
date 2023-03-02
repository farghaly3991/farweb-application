import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/',  component: () => import("../views/teacher-data.vue") },
  { path: '/teachers-data',  component: () => import("../views/teachers-data-admin.vue") },
  { path: '/findTeacher/:id',  component: () => import("../views/teacher-data.vue") },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router





