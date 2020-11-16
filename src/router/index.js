import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    props: {sec: 10000}
  },
  {
    path: '/red',
    name: 'red',
    component: () => import('../views/Home.vue'),
    props: {sec: 10000}
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: () => import('../views/Home.vue'),
    props: {sec: 3000}
  },
  {
    path: '/green',
    name: 'green',
    component: () => import('../views/Home.vue'),
    props: {sec: 15000}
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to,from,next)=>{
if(to.name === 'home'){
    router.push(localStorage.getItem('currentColor'))
  } else {
    next()
  }
})

export default router
