import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from "@/views/jobs/Jobs.vue";
import JobDetail from "@/views/jobs/JobDetail.vue";
import errorPage from "@/views/ErrorPage.vue";

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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path:"/jobs/:id",
    name:"jobDetail",
    component: JobDetail,
    props:true //accept any router
  },

  //redirect
  {
    path:'/all-jobs',
    redirect:'/jobs',
    name:'redirect'
  },
  //catchall 404
  {
    path:"/:catchAll(.*)",
    name:'errorPage',
    component:errorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
