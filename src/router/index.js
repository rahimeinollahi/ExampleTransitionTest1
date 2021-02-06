import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
//home path
const Home =import('../views/HomeViews/Home.vue');

//right path
const HardWare =import('../views/HomeViews/HardWare.vue');
const SoftWare =import('../views/HomeViews/SoftWare.vue');
const Network =import('../views/HomeViews/Network.vue');
const Another1 =import('../views/Another/Another1.vue');
const Another2 =import('../views/Another/Another2.vue');
const Image1 =import('../views/Image/Image1.vue');
const Image2 =import('../views/Image/Image2.vue');



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{transition:"ts-home"},
    children:[
      {
        path: '',
        name: 'HardWare',
        component: HardWare,
        meta:{transition:"ts-hardware"},
      },
      {
        path: 'SoftWare',
        name: 'SoftWare',
        component: SoftWare,
        meta:{transition:"ts-software"},
      }, 
      {
        path: 'network',
        name: 'Network',
        component: Network,
        meta:{transition:"ts-network"},
      },
      {
        path: 'another1',
        name: 'Another1',
        component: Another1,
        meta:{transition:"ts-another1"},
      },
      
      {
        path: 'another2',
        name: 'Another2',
        component: Another2,
        meta:{transition:"ts-another2"},
      },
      {
        path: 'image1',
        name: 'Image1',
        component: Image1,
        meta:{transition:"ts-image1"},
      },
      {
        path: 'image2',
        name: 'Image2',
        component: Image2,
        meta:{transition:"ts-image2"},
      },
    ],
      },
      

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
