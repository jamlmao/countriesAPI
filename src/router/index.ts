import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Ireland from '../views/irelandPage.vue';
import Cy from '../views/CyPage.vue';



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/IE',
    name: 'Ireland',
    component: Ireland 
  },
  {
    path: '/cy',
    name: 'Cyprus',
    component: Cy
  },
  {
    path: '/es',
    name: 'Spain',
    component: ()=> import('@/views/EsPage.vue')
  },
  {
    path: '/li',
    name: 'Liechen',
    component: ()=> import('@/views/LiePage.vue')
  },
  {
    path: '/bg',
    name: 'Bulgaria',
    component: ()=> import('@/views/BgPage.vue')
  },
  {
    path: '/de',
    name: 'Germany',
    component: ()=> import('@/views/DePage.vue')
  },
  {
    path: '/fo',
    name: 'FaroeIsland',
    component: ()=> import('@/views/FoPage.vue')
  },
  {
    path: '/gb',
    name: 'UnitedKingdom',
    component: ()=> import('@/views/UkPage.vue')
  },
  {
    path: '/md',
    name: 'Moldova',
    component: ()=> import('@/views/MdPage.vue')
  },
  {
    path: '/lt',
    name: 'Lithuania',
    component: ()=> import('@/views/LtPage.vue')
  },
  {
    path: '/pl',
    name: 'Poland',
    component: ()=> import('@/views/PlPage.vue')
  },
  {
    path: '/ch',
    name: 'Switzerland',
    component: ()=> import('@/views/SwPage.vue')
  },
  {
    path: '/ax',
    name: 'Alandisland',
    component: ()=> import('@/views/AlandPage.vue')
  },
  {
    path: '/is',
    name: 'Iceland',
    component: ()=> import('@/views/icelandPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
