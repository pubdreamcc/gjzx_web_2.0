import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/routerComponents/Home.vue'
import Live from '../components/routerComponents/Live.vue'
import CourseDetail from '../components/routerComponents/CourseDetail.vue'
import ResourceCenter from '../components/routerComponents/ResourceCenter.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      name: 'Home'
    },
    {
      path: '/live',
      component: Live,
      name: 'Live'
    },
    {
      path: '/coursedetail',
      component: CourseDetail,
      name: 'CourseDetail'
    },
    {
      path: '/resourcecenter',
      component: ResourceCenter,
      name: 'ResourceCenter'
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
